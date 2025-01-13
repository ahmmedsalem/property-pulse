import PropertyCard from "@/components/PropertyCard";

import connectDB from "@/config/database";
import Property from "@/models/Property";
import { PropertyType } from "@/types";

const PropertiesPage = async () => {
  await connectDB();
  const proprties = await (Property.find({}).lean() as unknown) as PropertyType[]; 

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-5">
        {proprties.length === 0 ? (
          <p>No Proprties Found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proprties.map((property: PropertyType) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
