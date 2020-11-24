using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LoginApplication.VM
{
    public class QueueClass
    {
        public int queueId { get; set; }
        public DateTime queueDate { get; set; }
        public int treatment { get; set; }
        public string comments { get; set; }
    }
}