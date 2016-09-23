package com.hack.dao;

import java.net.UnknownHostException;
import java.util.List;

import com.hack.model.CustomerModel;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;

public class MongoConnect {

	/**
	 * @param args
	 */
	//public static void main(String[] args) {
		// TODO Auto-generated method stub
		
	public CustomerModel getCusData(String type){
		CustomerModel cus = new CustomerModel();
		try {
			MongoClient mongo = new MongoClient( "localhost" , 27017 );
			
			List<String> dbs = mongo.getDatabaseNames();
			for(String db : dbs){
				System.out.println(db);
			}
			
			DB db = mongo.getDB("mani");
			DBCollection table = db.getCollection("customer");
			BasicDBObject searchQuery = new BasicDBObject();
			searchQuery.put("customertype", type);

			//DBCursor cursor = table.find();
			//DBCursor cursor = table.find(searchQuery);
			
			
			DBObject dbo = table.findOne(searchQuery);
			String firstname = dbo.get("firstname").toString();
			String lastname = dbo.get("lastname").toString();
			String dob = dbo.get("DOB").toString();
			String gender = dbo.get("gender").toString();
			String postcode = dbo.get("postcode").toString();
			String nationality = dbo.get("nationality").toString();
			String custype = dbo.get("customertype").toString();
			
			
			cus.setFirstname(firstname);
			cus.setLastname(lastname);
			cus.setDob(dob);
			cus.setGender(gender);
			cus.setPostcode(postcode);
			cus.setNationality(nationality);
			cus.setCustype(custype);

			//while (cursor.hasNext()) {
				//System.out.println(cursor.next().get("title"));
				/*System.out.println(cursor.next());
				
				cus.setFirstname(cursor.next().get("firstname").toString());
				cus.setLastname(cursor.next().get("lastname").toString());
				cus.setDob(cursor.next().get("DOB").toString());
				cus.setGender(cursor.next().get("gender").toString());
				cus.setPostcode(cursor.next().get("postcode").toString());
				cus.setNationality(cursor.next().get("nationality").toString());
				cus.setCustype(cursor.next().get("customertype").toString());
				
				System.out.println(cursor.get("firstname").toString());
				System.out.println(cursor.next().get("lastname").toString());
				System.out.println(cursor.next().get("DOB").toString());
				System.out.println(cursor.next().get("gender").toString());
				System.out.println(cursor.next().get("postcode").toString());
				System.out.println(cursor.next().get("nationality").toString());
				System.out.println(cursor.next().get("customertype").toString());*/
		//	}
			
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return cus;

	}

	
}
