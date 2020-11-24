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
    [RoutePrefix("Api/queue")]
    public class QueueController : ApiController
    {
        CosmeticDBEntities DB = new CosmeticDBEntities();
        [Route("InsertQueue")]
        [HttpPost]
        public object InsertQueue(Queue queue)
        {
            try
            {

            }
        }
    }
}