
const {Flights}=require('../models/Flight');
const {v4: uuid}=require("uuid");

//add/book flight
exports.bookFlight=async(req,res)=>{
    try{
        const {title,price}=await req.body;

        const newFlight={
            id: uuid(),
            title,
            time: new Date().toLocaleTimeString(),
            price,
            date: new Date().toLocaleDateString(),
    
        };
        //user.id=uuid;

        Flights.push(newFlight);
        res.status(201).json({
            message:'flight booked',
            newFlight,
            
        })
    }catch(err){
        res.status(500).json({message:err});
    }
}
//get all flights
exports.getFlights=async(req,res)=>{
    try{
        const flights= Flights;
        res.status(200).json({
        message:'All flight details',
        flights:flights});
    } catch(err){
        res.status(500).json({message:err});
    }
    
    }
//get single flight
exports.getFlight= async(req,res)=>{
    try{
        let id=req.params.id
        const flight= Flights.find((flight)=> flight.id===id);
        res.status(200).json({
            message:"flight details found",
            flight,
        });
    }catch(error){
        res.status(500).json({message:error});
    }
};
//update/edit flight
exports.updateFlight=async(req,res)=>{
    try{
        let id=req.params.id;
        const flight=Flights.find((flight) => flight.id===id);
        const {title,price,date,time}=await req.body;
        flight.title=title;
        flight.price=price;
        flight.date=date;
        flight.time=time;
        res.status(200).json({
            message:"flight details updated",
            flight,
        });
    } catch(err){
        res.status(500).json({message:err});

    }

    }
//delete flight
exports.deleteFlight=async(req,res)=>{
    try{
        let id=req.params.id;
        const flight=Flights.find((flight) => flight.id===id);
        Flights.splice(Flights.indexOf(flight), 1);
;        res.status(200).json({
            message:"flight details deleted",
            flight,
        });
    } catch(err){
        res.status(500).json({message:err});

    }
};