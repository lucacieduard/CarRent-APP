import FullPageLayout from "../FullPage/FullPageLayout";
import "./SideBar.scss";
import { useState } from "react";
const SideBarPage = ({
  buttons,
  children,
  filter,
}: {
  buttons: boolean;
  children: React.ReactNode;
  filter: (
    type: string[],
    capacity: number[],
    price: number | undefined
  ) => void;
}) => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [filters, setFilters] = useState<{
    type: string[];
    capacity: number[];
    price: number | undefined;
  }>({
    type: [],
    capacity: [],
    price: undefined,
  });

  const changeFilter = (
    checked: boolean,
    value: string | number,
    param: "type" | "capacity"
  ) => {
    if (checked) {
      (filters[param] as (string | number)[]).includes(value)
        ? ""
        : setFilters((prev) => {
            return {
              ...prev,
              [param]: [...prev[param], value],
            };
          });
    } else {
      (filters[param] as (string | number)[]).includes(value)
        ? setFilters((prev) => {
            return {
              ...prev,
              [param]: [...prev.type.filter((type) => type !== value)],
            };
          })
        : "";
    }
  };

  return (
    <FullPageLayout>
      <div className="sideBar_page_layout container_w">
        {buttons && (
          <button
            className="button hideDesktop"
            onClick={() => {
              setShowSideBar((prev) => !prev);
            }}
          >
            Filter
          </button>
        )}
        <div className={`sidebar ${showSideBar ? "" : "hide"}`}>
          <div className="sections">
            <div className="section">
              <span className="sectionTitle">Type</span>
              <div className="sectionItem">
                <input
                  type="checkbox"
                  value="sport"
                  onChange={(e) =>
                    changeFilter(e.target.checked, e.target.value, "type")
                  }
                />
                <span className="sectionItemName">Sport</span>
              </div>
              <div className="sectionItem">
                <input
                  type="checkbox"
                  value="suv"
                  onChange={(e) =>
                    changeFilter(e.target.checked, e.target.value, "type")
                  }
                />
                <span className="sectionItemName">SUV</span>
              </div>
              <div className="sectionItem">
                <input
                  type="checkbox"
                  value="mpv"
                  onChange={(e) =>
                    changeFilter(e.target.checked, e.target.value, "type")
                  }
                />
                <span className="sectionItemName">MPV</span>
              </div>
              <div className="sectionItem">
                <input
                  type="checkbox"
                  value="sedan"
                  onChange={(e) =>
                    changeFilter(e.target.checked, e.target.value, "type")
                  }
                />
                <span className="sectionItemName">Sedan</span>
              </div>
              <div className="sectionItem">
                <input
                  type="checkbox"
                  value="coupe"
                  onChange={(e) =>
                    changeFilter(e.target.checked, e.target.value, "type")
                  }
                />
                <span className="sectionItemName">Coupe</span>
              </div>
              <div className="sectionItem">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    changeFilter(e.target.checked, e.target.value, "type")
                  }
                  value="hatchback"
                />
                <span className="sectionItemName">Hatchback</span>
              </div>
            </div>
            <div className="section">
              <span className="sectionTitle">Capacity</span>
              <div className="sectionItem">
                <input
                  type="checkbox"
                  value={2}
                  onChange={(e) =>
                    changeFilter(
                      e.target.checked,
                      Number(e.target.value),
                      "capacity"
                    )
                  }
                />
                <span className="sectionItemName">2 Person</span>
              </div>
              <div className="sectionItem">
                <input
                  type="checkbox"
                  value={4}
                  onChange={(e) =>
                    changeFilter(
                      e.target.checked,
                      Number(e.target.value),
                      "capacity"
                    )
                  }
                />
                <span className="sectionItemName">4 Person</span>
              </div>
              <div className="sectionItem">
                <input
                  type="checkbox"
                  value={6}
                  onChange={(e) =>
                    changeFilter(
                      e.target.checked,
                      Number(e.target.value),
                      "capacity"
                    )
                  }
                />
                <span className="sectionItemName">6 Person</span>
              </div>
              <div className="sectionItem">
                <input
                  type="checkbox"
                  value={8}
                  onChange={(e) =>
                    changeFilter(
                      e.target.checked,
                      Number(e.target.value),
                      "capacity"
                    )
                  }
                />
                <span className="sectionItemName">8 or More</span>
              </div>
            </div>
            <div className="section">
              <span className="sectionTitle">Price</span>
              <div className="range">
                <input
                  type="range"
                  min={0}
                  max={150}
                  onChange={(e) => {
                    setFilters((prev) => {
                      return {
                        ...prev,
                        price: Number(e.target.value),
                      };
                    });
                  }}
                />
                <span className="max">Max : 150</span>
              </div>
            </div>
          </div>
          {buttons && (
            <button
              className="button w"
              onClick={() => {
                setShowSideBar(false);

                filter(filters.type, filters.capacity, filters.price);
              }}
            >
              Apply Filters
            </button>
          )}
        </div>
        <div className="page">{children}</div>
      </div>
    </FullPageLayout>
  );
};

export default SideBarPage;
