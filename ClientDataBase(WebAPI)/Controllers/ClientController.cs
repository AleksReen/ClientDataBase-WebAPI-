using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientDataBaseWebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ClientDataBaseWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        public static List<Client> testClientDB = new List<Client>(){
            new Client(){
                Id = 1,
                Name = "ЗАО 'Полимир'",
                Address = "Могилёв, пр-кт Димитрова 78, рампа №3",
                Phone = "78-58-98, +375(44)705-45-01",
                Email = "polymir@tut.by"
            },
            new Client(){
                Id = 2,
                Name = "ИП Алекперов К.А",
                Address = "Могилёв, пр-кт Мира 37, оф.12",
                Phone = "+375(29)331-85-74",
                Email = "player191@rambler.ru"
            },
             new Client(){
                Id = 3,
                Name = "ИП Алекперов К.А",
                Address = "Могилёв, пр-кт Мира 37, оф.12",
                Phone = "+375(29)331-85-74",
                Email = "player191@rambler.ru"
            },
              new Client(){
                Id = 4,
                Name = "ИП Алекперов К.А",
                Address = "Могилёв, пр-кт Мира 37, оф.12",
                Phone = "+375(29)331-85-74",
                Email = "player191@rambler.ru"
            },
               new Client(){
                Id = 5,
                Name = "ИП Алекперов К.А",
                Address = "Могилёв, пр-кт Мира 37, оф.12",
                Phone = "+375(29)331-85-74",
                Email = "player191@rambler.ru"
            },
                new Client(){
                Id = 6,
                Name = "ИП Алекперов К.А",
                Address = "Могилёв, пр-кт Мира 37, оф.12",
                Phone = "+375(29)331-85-74",
                Email = "player191@rambler.ru"
            },
                 new Client(){
                Id = 7,
                Name = "ИП Алекперов К.А",
                Address = "Могилёв, пр-кт Мира 37, оф.12",
                Phone = "+375(29)331-85-74",
                Email = "player191@rambler.ru"
            }

        };

        public ActionResult<IEnumerable<Client>> GetClientBase()
        {           
            return Ok(testClientDB);
        }
    }
}