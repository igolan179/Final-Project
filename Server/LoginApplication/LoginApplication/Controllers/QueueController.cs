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
    [RoutePrefix("Api/queue")]
    public class QueueController : ApiController
    {
        CosmeticDBEntities DB = new CosmeticDBEntities();
        [ActionName("GetQueues")]
        [HttpPost]
        public object GetQueues(DateClass date)
        {

            var queues = DB.CustomerQueues.Where(x => x.QueueDate.Value.Day + "-" + x.QueueDate.Value.Month + "-" + x.QueueDate.Value.Year == date.date).Select(x => x.QueueDate.Value.Hour).ToList();


            return queues;
        }

        [ActionName("SetQueue")]
        [HttpPost]
        public object SetDate(QueueClassResponse queue)
        {
            try
            {
                CustomerQueue queueClass = new CustomerQueue();
                int day = int.Parse(queue.customerQueueDate.Substring(0, 2));
                int month = int.Parse(queue.customerQueueDate.Substring(3, 2));
                int year = int.Parse(queue.customerQueueDate.Substring(6, 2));
                int hour = int.Parse(queue.customerQueueTime);
                DateTime date = new DateTime(day, month, year, hour, 0, 0); // 27-11-2020 12:00:00
                queueClass.QueueDate = date;
                queueClass.Treatment = queue.customerTreatment;
                DB.CustomerQueues.Add(queueClass);
                DB.SaveChanges();
                var customerEntity = DB.Customers.Where(x => x.CustomerId == queue.customerId.ToString()).Select(x => x.CustomerQueue).SingleOrDefault();
                var queueEntity = DB.CustomerQueues.Select(x => x.Id).SingleOrDefault();
                customerEntity = queueEntity;
                DB.SaveChanges();
                return new Response
                { Status = "Success", Message = "Appointment Made!" };
            }
            catch (Exception ex)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Fail" };
        }
    }
}