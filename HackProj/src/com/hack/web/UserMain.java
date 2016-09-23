package com.hack.web;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.hack.dao.MongoConnect;
import com.hack.model.CustomerModel;
import com.hack.model.UserBean;
 
@Path("/customers")
public class UserMain {
    
    @GET
    @Path("/{custype}")
    @Produces(MediaType.APPLICATION_JSON)
    public CustomerModel produceCustomerDetailsinJSON(@PathParam("custype") String type) {
 
        /*
         * I AM PASSING CUST.NO AS AN INPUT, SO WRITE SOME BACKEND RELATED STUFF AND
         * FIND THE CUSTOMER DETAILS WITH THAT ID. AND FINALLY SET THOSE RETRIEVED VALUES TO
         * THE CUSTOMER OBJECT AND RETURN IT, HOWEVER IT WILL RETURN IN JSON FORMAT :-)
         * */
        
    	/*UserBean cust = new UserBean();        
            cust .setCustNo(no);
            cust .setCustName("Java4s");
            cust .setCustCountry("India");
        return cust;*/
    	
    	CustomerModel cust=new CustomerModel();
    	MongoConnect mgc=new MongoConnect();
    	
    	cust = mgc.getCusData(type);
    	
    	return cust;
    	
    }
}