'use client'
import PropertyDetails from "@/components/PropertyDetails";
import PropertyHeader from "@/components/PropertyHeader";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { PropertyType } from "@/types";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const PropertyPage = async ({ params }: any) => {
  await connectDB();
  const property = (await Property.findById(params?.id)) as PropertyType;
  return (
    <>
      <PropertyHeader image={property.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="fas fa-arrow-left mr-2" />
            Back to Properties
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
      <section className='bg-blue-50'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <PropertyDetails property={property} />

            {/* <!-- Sidebar --> */}
            <aside className='space-y-4'>
              {/* <BookmarkButton property={property} />
              <ShareButtons property={property} />
              <PropertyContactForm property={property} /> */}
            </aside>
          </div>
        </div>
      </section>
      </section>
    </>
  );
};

export default PropertyPage;
