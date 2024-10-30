const { initializeDatabase } = require('./db/db.connect')
initializeDatabase()

const Car = require('./models/car.models')

const carData = {
  brand: "Ford",
  model: "Mustang",
  year: 2019,
  bodyStyle: "Convertible",
  fuelType: "Gasoline",
  transmission: "Automatic",
  engine: "5.0L V8",
  mileage: 25000,
  color: "Red",
  price: 3500000,
  condition: "Used",
  description: "Exciting Ford Mustang convertible with powerful V8 engine.",
  photos: [
    "https://example.com/mustang-photo1.jpg",
    "https://example.com/mustang-photo2.jpg",
    "https://example.com/mustang-photo3.jpg",
  ],
}
const carData1 = {
  brand: "Honda",
  model: "Civic",
  year: 2018,
  bodyStyle: "Coupe",
  fuelType: "Gasoline",
  transmission: "Manual",
  engine: "1.5L Turbocharged Inline-4",
  mileage: 40000,
  color: "Black",
  price: 1800000,
  condition: "Used",
  description: "Sporty Civic coupe with low mileage and manual transmission.",
  photos: [
    "https://example.com/civic-photo1.jpg",
    "https://example.com/civic-photo2.jpg",
    "https://example.com/civic-photo3.jpg",
  ],
}

//writing a function to save the car data into DB 
const createCar = async () => {
     try {
          const car = new Car(carData)
          const saveCar =await car.save()
          console.log("Car added", saveCar)
     } catch (error) {
          console.log(error)
     }
}
// createCar()

//3 writing a function to read all data from database
const readCars = async () => {
     try {
          const carsData = await Car.find()
          console.log(carsData)
     } catch (error) {
          console.log(error)
     }
}
// readCars()

//4 read the car details by it's name
const readCarByBrand = async (carBrand) => {
  try {
    const carData = await Car.findOne({ brand: carBrand })
    console.log(carData)
  } catch (error) {
    console.log(error)
  }
}
// readCarByBrand("Ford")

//5 reading car by its color
const readCarByColor = async (carColor) => {
  try {
    const carData = await Car.findOne({ color: carColor })
    console.log(carData)
  } catch (error) {
    console.log(error)
  }
}
// readCarByColor("Black")

//6 update the price of Car Corolla with model name
const updateCarPrice = async (modelName, dataToUpdate) => {
  try {
    const carData = await Car.findOneAndUpdate(
      { model: modelName },
      dataToUpdate, {new: true}
       )
       console.log(carData)
  } catch (error) {
       console.log(error)
  }
}
// updateCarPrice("Corolla", {price: 2300000})

//7 update the condition of car to used, of "model S"
const updateCarCondition = async (modelName, dataToUpdate) => {
  try {
    const carData = await Car.findOneAndUpdate(
      { model: modelName },
      dataToUpdate,
      { new: true }
    )
    console.log(carData)
  } catch (error) {
    console.log(error)
  }
}
// updateCarCondition("Model S", {condition: ["Used",]})

//8 delete a car by its id
async function deleteCarById(id) {
     try {
          const deletedCar = await Car.findByIdAndDelete(id)
          console.log(deletedCar)
     } catch (error) {
          console.log(error)
     }
}
// deleteCarById("670caa960b0bf2f20313a28f")

//9 delete a car by its bodystyle
async function deleteCarByItsStyle(style) {
     try {
          const deletedCar = await Car.findOneAndDelete({ bodyStyle: style })
          console.log(deletedCar)
     } catch (error) {
          console.log(error)
     }
}
// deleteCarByItsStyle("Coupe")