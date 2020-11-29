using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LoginApplication.VM
{
    public class MyCustomerResponse
    {
        public string id { get; set; }
        public string name { get; set; }
        public int phone { get; set; }
        public string password { get; set; }
    }
}