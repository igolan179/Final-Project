using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using LoginApplication.Models;
using LoginApplication.VM;
using LoginApplication.Models.Dto;

namespace LoginApplication.App_Start
{
    public class AutoMapperConfiguration
    {
        public static IMapper MapperConfiguration;
        public static void CreateConfiguration()
        {
            var MapperConfiguration = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Login, LoginDto>();
                cfg.CreateMap<LoginDto, Login>();
                cfg.CreateMap<Register, RegisterDto>();
                cfg.CreateMap<RegisterDto, Register>();
            });

            AutoMapperConfiguration.MapperConfiguration = MapperConfiguration.CreateMapper();

        }
    }
}