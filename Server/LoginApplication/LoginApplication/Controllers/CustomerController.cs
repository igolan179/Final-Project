using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LoginApplication.Models;
using LoginApplication.VM;

namespace LoginApplication.Controllers
{
    [RoutePrefix("Api/customer")]
    public class CustomerController : ApiController
    {
        CosmeticDBEntities DB = new CosmeticDBEntities();
        [ActionName("GetInfo")]
        [HttpPost]
        public object GetInfo(MyResponseClass customerId)
        {
            try
            {
                string CustomerName = DB.Customers.Where(x => x.CustomerId == customerId.response).Select(x=> x.CustomerName).FirstOrDefault();
                int CustomerPhone = DB.Customers.Where(x => x.CustomerId == customerId.response).Select(x => x.CustomerPhone).FirstOrDefault();
                string CustomerPass = DB.Customers.Where(x => x.CustomerId == customerId.response).Select(x => x.CustomerPass).FirstOrDefault();

                return new MyCustomerResponse
                { id = CustomerName, password = CustomerPass, phone = CustomerPhone };
                
            }
            catch (Exception ex)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Failed to get info." };
        }
        [ActionName("SubmitInfo")]
        [HttpPost]
        public object SubmitInfo(MyCustomerResponse customerInfo)
        {
            try
            {
                Register updateInfo = new Register();
                updateInfo.customerId = customerInfo.id;
                updateInfo.customerName = customerInfo.name;
                updateInfo.customerPass = customerInfo.password;
                updateInfo.customerPhone = customerInfo.phone;



                var updateCustomer = DB.Customers.Where(x => x.CustomerId == updateInfo.customerId).FirstOrDefault();
                updateCustomer.CustomerName = updateInfo.customerName;
                if (updateInfo.customerPass != "")
                {
                    updateCustomer.CustomerPass = updateInfo.customerPass;
                }
                updateCustomer.CustomerPhone = updateInfo.customerPhone;
                DB.SaveChanges();
                return new Response
                { Status = "Success", Message = "Info Updated!" };

            }
            catch (Exception ex)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Failed to get info." };
        }
    }
}