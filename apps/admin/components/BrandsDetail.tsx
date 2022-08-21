import { useEffect, useState, FormEvent } from "react";
import { useRouter } from "next/router";

import { getBrandById, updateBrand } from "../service/brands.service";
import { dateToString } from "../utils/dateToString";

import { BaseInput } from "./ui/inputs/BaseInput";
import { Button } from "./ui/Button";

type formValuesType = {
    name?: string,
    description?: string,
}

export const BrandsDetail = () => {
  const router = useRouter();

  const initialValues = {
    name: '',
    description: '',
  }

  const [data, setData] = useState(null);
  const [values, setValues] = useState<formValuesType>(initialValues);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getBrandById(router.query.brandId as string);
      setData(res.data);
    };

    fetchData().catch(console.error);

    console.log("DATA", data);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // @ts-ignore
    updateBrand({
        id: data.id,
        ...values,
    })
  }

  return (
    <div className="flex h-full">
      <div className="flex-1">
        {data && (
          <>
            <form 
                className="flex flex-col h-full"
                onSubmit={handleSubmit}
            >
              <div className="w-[380px]">
                <BaseInput 
                    label="Name"
                    defaultValue={data.name}
                    onChange={(value) => setValues({
                        name: value,
                    })}
                />
              </div>

              <div className="w-[380px]">
                <BaseInput
                  label="Description"
                  defaultValue={data.description}
                  onChange={(value) => setValues({
                    description: value,
                  })}
                />
              </div>

              <div className="w-[380px] mt-auto">
                <Button 
                    type="submit"
                >
                    Update
                </Button>
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
