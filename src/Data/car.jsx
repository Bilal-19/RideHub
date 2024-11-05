const carData = [
    {
        id: 1,
        modelName: "Hyundai Sonata",
        fuelAvg: 8.5,
        ridePerMile: 5000,
        availabilityStatus: true,
        imgAdd: "https://images.unsplash.com/photo-1726038021851-9dc24938b376?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    
    },
    {
        id: 2,
        modelName: "Toyota Corolla",
        fuelAvg: 12,
        ridePerMile: 3000,
        availabilityStatus: true,
        imgAdd: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        modelName: "Honda Civic",
        fuelAvg: 11,
        ridePerMile: 3500,
        availabilityStatus: false,
        imgAdd: "https://images.unsplash.com/photo-1631547891859-184677884115?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        modelName: "Ford Focus",
        fuelAvg: 9.5,
        ridePerMile: 2800,
        availabilityStatus: true,
        imgAdd: "https://images.unsplash.com/photo-1708849894321-2c9bc515df0e?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 5,
        modelName: "Chevrolet Malibu",
        fuelAvg: 10.2,
        ridePerMile: 4500,
        availabilityStatus: true,
        imgAdd: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd1vSdCF4zpkHabB15iuBIfe5-ZYtj6Y46Ew&s"
    },
    {
        id: 6,
        modelName: "Nissan Altima",
        fuelAvg: 9.8,
        ridePerMile: 3200,
        availabilityStatus: false,
        imgAdd: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 7,
        modelName: "Mazda 3",
        fuelAvg: 12.5,
        ridePerMile: 3700,
        availabilityStatus: true,
        imgAdd: "https://images.unsplash.com/photo-1652509672474-029082b75083?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 8,
        modelName: "Volkswagen Passat",
        fuelAvg: 10.7,
        ridePerMile: 4000,
        availabilityStatus: false,
        imgAdd: "https://images.unsplash.com/photo-1692565343875-1245359964d2?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 9,
        modelName: "BMW 3 Series",
        fuelAvg: 8.0,
        ridePerMile: 6000,
        availabilityStatus: true,
        imgAdd: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQMjRCT3xm7z8FKlM4yaw3aUzEGpvA9LtoNw&s"
    },
    {
        id: 10,
        modelName: "Audi A4",
        fuelAvg: 8.5,
        ridePerMile: 5200,
        availabilityStatus: true,
        imgAdd: "https://images.unsplash.com/photo-1725082542502-02d301b85a5b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 11,
        modelName: "Mercedes-Benz C-Class",
        fuelAvg: 8.3,
        ridePerMile: 5500,
        availabilityStatus: false,
        imgAdd: "https://images.unsplash.com/photo-1669451724324-4d02cee26b36?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 12,
        modelName: "Kia Optima",
        fuelAvg: 11,
        ridePerMile: 3100,
        availabilityStatus: true,
        imgAdd: "https://images.unsplash.com/photo-1592805723127-004b174a1798?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 13,
        modelName: "Subaru Impreza",
        fuelAvg: 10.5,
        ridePerMile: 3400,
        availabilityStatus: true,
        imgAdd: "https://images.unsplash.com/photo-1616938947157-6c6dc03d6d33?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 14,
        modelName: "Toyota Camry",
        fuelAvg: 9.2,
        ridePerMile: 2900,
        availabilityStatus: false,
        imgAdd: "https://images.unsplash.com/photo-1624578571415-09e9b1991929?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 15,
        modelName: "Honda Accord",
        fuelAvg: 10,
        ridePerMile: 3300,
        availabilityStatus: true,
        imgAdd: "https://images.unsplash.com/photo-1718037322646-065357b8173b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 16,
        modelName: "Hyundai Elantra",
        fuelAvg: 12.8,
        ridePerMile: 2600,
        availabilityStatus: false,
        imgAdd: "https://images.unsplash.com/photo-1723515822804-e3aa336e1435?q=80&w=1579&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 17,
        modelName: "Kia Forte",
        fuelAvg: 11.5,
        ridePerMile: 3500,
        availabilityStatus: true,
        imgAdd: "https://images.unsplash.com/photo-1546704167-c94195462e9c?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 18,
        modelName: "Volkswagen Jetta",
        fuelAvg: 10.1,
        ridePerMile: 3300,
        availabilityStatus: true,
        imgAdd: "https://images.unsplash.com/photo-1634330902803-94db39ce8c8d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 19,
        modelName: "Ford Fusion",
        fuelAvg: 9.0,
        ridePerMile: 4000,
        availabilityStatus: false,
        imgAdd: "https://images.unsplash.com/photo-1675957421588-bbe528181589?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 20,
        modelName: "Chevrolet Cruze",
        fuelAvg: 11.2,
        ridePerMile: 3100,
        availabilityStatus: true,
        imgAdd: "https://images.unsplash.com/photo-1615903903803-e59a55fa044d?q=80&w=1573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];


export default carData;