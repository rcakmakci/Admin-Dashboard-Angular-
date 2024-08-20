import { HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../ui/custom-toastr.service';
import { UserAuthService } from './models/user-auth.service';

export const errorHandlingInterceptor: HttpInterceptorFn = (req, next) => {
  const toastrService = inject(CustomToastrService);
  const userAuthService = inject(UserAuthService) as UserAuthService;
  const router = inject(Router);
  const spinner = inject(NgxSpinnerService);

  return next(req).pipe(
    catchError(error => {
      switch (error.status) {
        case HttpStatusCode.Unauthorized:
          userAuthService.refreshTokenLogin(localStorage.getItem("refreshToken"), (state) => {
            if (!state) {
              const url = router.url;
              if (url === "/products") {
                toastrService.message("Sepete ürün eklemek için oturum açmanız gerekiyor.", "Oturum açınız!", {
                  messageType: ToastrMessageType.Warning,
                  position: ToastrPosition.TopRight
                });
              } else {
                toastrService.message("Bu işlemi yapmaya yetkiniz bulunmamaktadır!", "Yetkisiz işlem!", {
                  messageType: ToastrMessageType.Warning,
                  position: ToastrPosition.BottomFullWidth
                });
              }
            }
          }).then(() => {
            toastrService.message("Bu işlemi yapmaya yetkiniz bulunmamaktadır!", "Yetkisiz işlem!", {
              messageType: ToastrMessageType.Warning,
              position: ToastrPosition.BottomFullWidth
            });
          });
          break;
        case HttpStatusCode.InternalServerError:
          toastrService.message("Sunucuya erişilmiyor!", "Sunucu hatası!", {
            messageType: ToastrMessageType.Warning,
            position: ToastrPosition.BottomFullWidth
          });
          break;
        case HttpStatusCode.BadRequest:
          toastrService.message("Geçersiz istek yapıldı!", "Geçersiz istek!", {
            messageType: ToastrMessageType.Warning,
            position: ToastrPosition.BottomFullWidth
          });
          break;
        case HttpStatusCode.NotFound:
          toastrService.message("Sayfa bulunamadı!", "Sayfa bulunamadı!", {
            messageType: ToastrMessageType.Warning,
            position: ToastrPosition.BottomFullWidth
          });
          break;





        default:
          toastrService.message("Beklenmeyen bir hata meydana gelmiştir!", "Hata!", {
            messageType: ToastrMessageType.Warning,
            position: ToastrPosition.BottomFullWidth
          });
          break;
      }

      spinner.hide(SpinnerType.BallAtom);
      return of(error);
    })
  );
};
