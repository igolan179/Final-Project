//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace LoginApplication.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Customer
    {
        public string CustomerId { get; set; }
        public string CustomerPass { get; set; }
        public string CustomerName { get; set; }
        public int CustomerPhone { get; set; }
        public Nullable<int> CustomerQueue { get; set; }
    
        public virtual CustomerQueue CustomerQueue1 { get; set; }
    }
}
