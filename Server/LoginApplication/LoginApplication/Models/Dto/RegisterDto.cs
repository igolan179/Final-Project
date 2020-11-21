using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LoginApplication.Models.Dto
{
    public class RegisterDto
    {
        public string CustomerId { get; set; }
        public string CustomerPass { get; set; }
        public string CustomerName { get; set; }
        public int CustomerPhone { get; set; }
    }
}
