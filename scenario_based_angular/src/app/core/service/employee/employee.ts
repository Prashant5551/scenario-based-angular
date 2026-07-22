import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { GlobalConstant } from '../../constant/Global.constant';

@Service()
export class Employee {

    // constructor(private http: HttpClient){}
    http = inject(HttpClient);

    getAllEmployee() {
        return this.http.get(environment.API_URL + GlobalConstant.API_END_POINT_CONTROLLER.EMPLOYEE + '/'
             +GlobalConstant.API_END_POINT_METHOD.EMPLOYEE.GET_ALL_EMPLOYEE);
    }

    createNewEmplyee(obj: any) {
        return this.http.post(environment.API_URL + "EmployeeApp/CreateEmployee", obj);
    }
}
