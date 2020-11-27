using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LoginApplication.VM
{
    public class QueueClassResponse
    {
        public int customerId { get; set; }
        public string customerQueueDate { get; set; }
        public string customerQueueTime { get; set; }
        public string customerTreatment { get; set; } 
    }
}