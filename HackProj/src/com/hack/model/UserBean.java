package com.hack.model;

public class UserBean {
    
    private int custNo;
    private String custName;
    private String custCountry;
    
    public int getCustNo() {
        return custNo;
    }
    public void setCustNo(int custNo) {
        this.custNo = custNo;
    }
    public String getCustName() {
        return custName;
    }
    public void setCustName(String custName) {
        this.custName = custName;
    }
    public String getCustCountry() {
        return custCountry;
    }
    public void setCustCountry(String custCountry) {
        this.custCountry=custCountry;
    }
}