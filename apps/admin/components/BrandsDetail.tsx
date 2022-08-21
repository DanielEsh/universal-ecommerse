import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getBrandById } from "../service/brands.service";
import { dateToString } from "../utils/dateToString";

import { BaseInput } from "./ui/inputs/BaseInput";

export const BrandsDetail = () => {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getBrandById(router.query.brandId as string);
      setData(res.data);
    };

    fetchData().catch(console.error);

    console.log("DATA", data);
  }, []);

  return (
    <div className="flex h-full">
      <div className="flex-1">
        {data && (
          <>
            <form>
              <div className="w-[380px]">
                <BaseInput label="Name" defaultValue={data.name} />
              </div>

              <div className="w-[380px]">
                <BaseInput
                  label="Description"
                  defaultValue={data.description}
                />
              </div>
            </form>
          </>
        )}
      </div>
      
      <aside className="w-[280px]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between bg-slate-200 p-4 rounded-md">
            <span>Дата создания</span>{" "}
            <span>{dateToString(new Date(data?.created_at))}</span>
          </div>
          <div className="flex items-center justify-between bg-slate-200 p-4 rounded-md">
            <span>Дата обновления</span>{" "}
            <span>{dateToString(new Date(data?.updated_at))}</span>
          </div>
        </div>
      </aside>
    </div>
  );
};
