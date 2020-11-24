using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LoginApplication.Models;
using LoginApplication.VM;

namespace LoginApplication.Controllers
{
    [RoutePrefix("Api/login")]
    public class LoginController : ApiController
    {
        CosmeticDBEntities DB = new CosmeticDBEntities();
        [Route("InsertCustomer")]
        [HttpPost]
        public object InsertCustomer(Register Reg)
        {
            try
            {
                if (DB.Customers.Any(x=>x.CustomerId==Reg.customerId))
                {
                    return new Response
                    { Status = "Error", Message = "Record Already Exist." };
                }
                else
                {
                    Customer Customer = new Customer();
                    Customer.CustomerId = Reg.customerId;
                    Customer.CustomerPass = Reg.customerPass;
                    Customer.CustomerName = Reg.customerName;
                    Customer.CustomerPhone = Reg.customerPhone;
                    DB.Customers.Add(Customer);
                    DB.SaveChanges();
                    return new Response
                    { Status = "Success", Message = "Record SuccessFully Added." };

                }
            }
            catch (Exception ex)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Invalid Data." };
        }
        [Route("Login")]
        [HttpPost]
        public Response CustomerLogin(Login login)
        {
            if (DB.Customers.Any(x => x.CustomerId == login.customerId && x.CustomerPass == login.customerPassword))
            {
                return new Response { Status = "Success", Message = "Login Successfully" };
                
            }
            else return new Response { Status = "Invalid", Message = "Invalid User." };

        }
    }
}