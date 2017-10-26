    CREATE TABLE airplanes (
      PlaneID SERIAL PRIMARY KEY NOT NULL,
      PlaneType varchar(40) NOT NULL,
      PassengerCount integer NOT NULL
    );