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
        public object GetQueues(DateClass date) // 27-11-2020
        {

            var queues = DB.CustomerQueues.Where(x => x.QueueDate == date.date).Select(x => x.QueueTime).ToList();


            return queues;
        }

        [ActionName("SetQueue")]
        [HttpPost]
        public object SetQueue(QueueClassResponse queue)
        {
            try
            {
                if (DB.Customers.Where(x => x.CustomerId == queue.customerId).Select(x => x.CustomerQueue).FirstOrDefault() != null)
                {
                    return new Response
                    { Status = "Exist", Message = "User already have an appointment." };
                }
                CustomerQueue queueClass = new CustomerQueue();
                string day = queue.customerQueueDate.Substring(0, 2);
                string month = queue.customerQueueDate.Substring(3, 2);
                string year = queue.customerQueueDate.Substring(6, 4);
                string hour = queue.customerQueueTime;
                string date = day + "-" + month + "-" + year;
                string time = hour;
                queueClass.QueueTime = time;
                queueClass.QueueDate = date;
                queueClass.Treatment = queue.customerTreatment;
                DB.CustomerQueues.Add(queueClass);
                DB.SaveChanges();
                int id = DB.CustomerQueues.Where(x => x.QueueDate == queue.customerQueueDate && x.QueueTime == queue.customerQueueTime).Select(x => x.Id).FirstOrDefault();
                var existingCustomer = DB.Customers.Where(x => x.CustomerId == queue.customerId).SingleOrDefault();
                existingCustomer.CustomerQueue = id;
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

        [ActionName("EditQueue")]
        [HttpPost]
        public object EditQueue(QueueClassResponse queue)
        {
            try
            {
                var customerQueue = DB.Customers.Where(x => x.CustomerId == queue.customerId).FirstOrDefault();
                var CustomerQueueTemp = customerQueue.CustomerQueue;
                customerQueue.CustomerQueue = null;

                DB.SaveChanges();

                var queueToDelete = DB.CustomerQueues.Where(x => x.Id == CustomerQueueTemp).FirstOrDefault();
                if (queueToDelete != null)
                {
                    DB.CustomerQueues.Remove(queueToDelete);
                    DB.SaveChanges();
                }

                CustomerQueue queueClass = new CustomerQueue();
                string day = queue.customerQueueDate.Substring(0, 2);
                string month = queue.customerQueueDate.Substring(3, 2);
                string year = queue.customerQueueDate.Substring(6, 4);
                string hour = queue.customerQueueTime;
                string date = day + "-" + month + "-" + year;
                string time = hour;
                queueClass.QueueTime = time;
                queueClass.QueueDate = date;
                queueClass.Treatment = queue.customerTreatment;
                DB.CustomerQueues.Add(queueClass);
                DB.SaveChanges();
                var queueEntity = DB.CustomerQueues.Where(x => x.QueueDate == queue.customerQueueDate && x.QueueTime == queue.customerQueueTime).Select(x => x.Id).FirstOrDefault();
                DB.Customers.Where(x => x.CustomerId == queue.customerId).ToList().ForEach(x => x.CustomerQueue = queueEntity);
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

        [ActionName("Test")]
        [HttpPost]
        public object EditQueue(DateClass test)
        {
            try
            {
                return new Response
                { Status = test.date, Message = "Success" };
            }
            catch (Exception ex)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Fail" };
        }

        [ActionName("GetCustomerQueue")]
        [HttpPost]
        public object GetCustomerQueue(DateClass customerId)
        {
            try
            {
                var Customer = DB.Customers.Where(x => x.CustomerId == customerId.date).FirstOrDefault();
                var CustomerQueue = DB.CustomerQueues.Where(x => x.Id == Customer.CustomerQueue).FirstOrDefault();
                if (CustomerQueue == null)
                {
                    return new Response
                    { Status = "Alert", Message = "Invalid Queue" };
                }
                else
                {
                    return new CustomerQueueResponse
                    { id = CustomerQueue.Id.ToString(), date = CustomerQueue.QueueDate, time = CustomerQueue.QueueTime, treatment = CustomerQueue.Treatment };
                }
            }
            catch (Exception ex)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Fail" };
        }
        [ActionName("CancelQueue")]
        [HttpPost]
        public object CancelQueue(MyResponseClass customerId)
        {
            try
            {
                var customerQueue = DB.Customers.Where(x => x.CustomerId == customerId.response).FirstOrDefault();
                var CustomerQueueTemp = customerQueue.CustomerQueue;
                customerQueue.CustomerQueue = null;

                DB.SaveChanges();

                var queueToDelete = DB.CustomerQueues.Where(x => x.Id == CustomerQueueTemp).FirstOrDefault();
                if (queueToDelete != null)
                {
                    DB.CustomerQueues.Remove(queueToDelete);
                    DB.SaveChanges();
                }
                return new Response
                { Status = "Success", Message = "Appointment Removed!" };
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
