using ServiceStack.Data;

[assembly: HostingStartup(typeof(trackmyhealthmicro.ConfigureAutoQuery))]

namespace trackmyhealthmicro
{
    public class ConfigureAutoQuery : IHostingStartup
    {
        // public void Configure(IWebHostBuilder builder) => builder
        //     .ConfigureServices(services => {
        //         // Enable Audit History
        //         services.AddSingleton<ICrudEvents>(c =>
        //             new OrmLiteCrudEvents(c.Resolve<IDbConnectionFactory>()));
        //     })
        //     .ConfigureAppHost(appHost => {
        //         appHost.Plugins.Add(new AutoQueryFeature {
        //                 MaxLimit = 1000,
        //                 // Add this line, Configures Generated CRUD services with defaults
        //                 GenerateCrudServices = new GenerateCrudServices()
        //                 {
        //                 AutoRegister = true
        //         }
        //         }
        //
        //         );
        //     });


        public void Configure(IWebHostBuilder builder) => builder
                .ConfigureAppHost(appHost => {
                    appHost.Plugins.Add(new AutoQueryFeature {
                        MaxLimit = 1000,

                        // Add this line, Configures Generated CRUD services with defaults
                        GenerateCrudServices = new GenerateCrudServices()
                        {
                            AutoRegister = true
                        }
                    });
                });

    }
}
