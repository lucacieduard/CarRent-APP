import FullPageLayout from "../FullPage/FullPageLayout";
import "./SideBar.scss";
import { useState } from "react";
const SideBarPage = ({ children }: { children: React.ReactNode }) => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  return (
    <FullPageLayout>
      <div className="sideBar_page_layout container_w">
        <button
          className="button hideDesktop"
          onClick={() => {
            setShowSideBar((prev) => !prev);
          }}
        >
          Filter
        </button>
        <div className={`sidebar ${showSideBar ? "" : "hide"}`}>
          <div className="sections">
            <div className="section">
              <span className="sectionTitle">Type</span>
              <div className="sectionItem">
                <input type="checkbox" />
                <span className="sectionItemName">Sport</span>
                <span className="sectionItemLen">(10)</span>
              </div>
              <div className="sectionItem">
                <input type="checkbox" />
                <span className="sectionItemName">SUV</span>
                <span className="sectionItemLen">(12)</span>
              </div>
              <div className="sectionItem">
                <input type="checkbox" />
                <span className="sectionItemName">MPV</span>
                <span className="sectionItemLen">(10)</span>
              </div>
              <div className="sectionItem">
                <input type="checkbox" />
                <span className="sectionItemName">Sedan</span>
                <span className="sectionItemLen">(10)</span>
              </div>
              <div className="sectionItem">
                <input type="checkbox" />
                <span className="sectionItemName">Coupe</span>
                <span className="sectionItemLen">(10)</span>
              </div>
              <div className="sectionItem">
                <input type="checkbox" />
                <span className="sectionItemName">Hatchback</span>
                <span className="sectionItemLen">(10)</span>
              </div>
            </div>
            <div className="section">
              <span className="sectionTitle">Capacity</span>
              <div className="sectionItem">
                <input type="checkbox" />
                <span className="sectionItemName">2 Person</span>
                <span className="sectionItemLen">(10)</span>
              </div>
              <div className="sectionItem">
                <input type="checkbox" />
                <span className="sectionItemName">4 Person</span>
                <span className="sectionItemLen">(10)</span>
              </div>
              <div className="sectionItem">
                <input type="checkbox" />
                <span className="sectionItemName">6 Person</span>
                <span className="sectionItemLen">(10)</span>
              </div>
              <div className="sectionItem">
                <input type="checkbox" />
                <span className="sectionItemName">8 or More</span>
                <span className="sectionItemLen">(10)</span>
              </div>
            </div>
            <div className="section">
              <span className="sectionTitle">Price</span>
              <div className="range">
                <input type="range" min={0} max={100} />
                <span className="max">Max : 100</span>
              </div>
            </div>
          </div>
          <button className="button w" onClick={() => setShowSideBar(false)}>
            Apply Filters
          </button>
        </div>
        <div className="page">{children}</div>
      </div>
    </FullPageLayout>
  );
};

export default SideBarPage;
