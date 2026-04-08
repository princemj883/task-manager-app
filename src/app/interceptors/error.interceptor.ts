import { HttpInterceptorFn, HttpErrorResponse } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

export const errorInterceptor: HttpInterceptorFn = (request, next) =>
{
    return next(request).pipe(
        catchError((error: any) => 
        {
            if(error instanceof HttpErrorResponse)
            {
                switch(error.status)
                {
                    case 0:
                        console.error('Network error:', error);
                    case 401:
                        console.error('Unauthorized access:', error);
                    case 403:
                        console.error('Forbidden:', error);
                    case 404:
                        console.error('Not found:', error);
                    case 500:
                    case 501:
                    case 502:
                    case 503:
                    case 504:
                        console.error('Server error:', error);
                        break;
                    default:
                        console.error('Http Error: ${error.status} - ${error.message}');
                }
            }
            else{
                console.error('An unexpected error occurred:', error);
            }
            return throwError(() => error);
        })
    );
};