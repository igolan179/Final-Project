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
        [ActionName("EditQueue")]
        [HttpPost]
        public object EditPhone(MyCustomerResponse response)
        {
            try
            {
                

                DB.SaveChanges();

            }
}