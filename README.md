Track My Health JAMStack in Sveltekit with static adapter, service API in .NET utilizing gRPC, along with a couple micro services in GO.

Will be more of a mobile and IPad type web app and totally mobile first approach.  Then the user can login on a larger web browser to look at graphs and and pdf's etc to see how they have come along in their journey of tracking their health.  They will create 4 different types of treatments, Meds, exercise, symtom checks, and finally different measurements like blood pressure/blood sugar, etc.


They will also have the opportunity to talk with their provider/make appointments/abiltiy to message Dr or give udpdates, etc. 


# .NET 6.0 Service API + Sveltekit + Tailwindcss/Daisy UI + all of the goodies that come along with message centric api's like server side validation that's integrated perfectly with client side validation.  Will be using TokenCookies to authenticate along with sesssions.  Micro service for creating pdfs, hangfire.io for sending emails, and another micro service for sending each day's reminders that the user's have set for each type of treatment.  It will fire every 5 mins as it keeps looking for new treatments that have schedules which have not been sent out yet today.  I.E. the user just created a treatment.  


I may try and implement some type of caching on the client side.  They dont' need to be getting and sending data constantly.  It's only gongi to be their own data they ever see.  And if anything needs to be pushed to them from the server, that shouldn't be too hard with grpc.
