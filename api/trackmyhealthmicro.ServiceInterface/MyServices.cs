using System;
using ServiceStack;
using trackmyhealthmicro.ServiceModel;

namespace trackmyhealthmicro.ServiceInterface
{
    public class MyServices : Service
    {
        public object Any(Hello request)
        {
            return new HelloResponse { Result = $"Hello, {request.Name}!" };
        }
    }
}
