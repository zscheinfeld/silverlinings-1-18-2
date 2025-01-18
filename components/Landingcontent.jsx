
import styles from "@/components/Landing.module.css";

const Landingcontent=()=>{

    return(

        <>

      <div className={styles.landingoutertext}>
        <div className={styles.landinginnertext}>
        An open project to accelerate healthy longevity
        </div>
      </div>

      <div className={styles.halfspace}></div>
      
      <div className={styles.landingoutertext}>
        <div className={`${styles.landinginnertext} ${styles.light} ${styles.landingmedium}`}>
        The world is aging. 
        </div>
        <div className={`${styles.landinginnertext} ${styles.light} ${styles.landingsmall}`}>
        <div className={styles.maxwidth400}>
        And the way we age profoundly impacts our economies, shaping how we live, <span className={styles.textproductivity}>work</span>, <span className={styles.textfertility}>give birth</span>, and <span className={styles.textmortality}>die</span>.
        </div>
        </div>
      </div>

      <div className={styles.halfspace}></div>

      <div className={styles.space}></div>
      <div className={styles.halfspace}></div>

      <div className={styles.landingtextlightcontainer}>
        <div className={styles.landingtextlightinnercontainer}>
            <div className={styles.landingtextleft}>
                <div className={styles.landingtextlarge}>
                Our short healthspan affects every family, economy, and government.
                </div>
            </div>
            <div className={styles.landingtextright}>
                    <div className={styles.landingtextsmall}>
                    In 2025, some of the free-market economies with the highest debt are developed countries with large populations of older adults suffering from age-related health conditions like cancer, menopause, and Alzheimer’s. Japan’s debt-to-GDP ratio, for instance, is at 260% — twice the American ratio — in no small part due to the sky-high costs of an aging and shrinking population. But biological aging affects everyone.
                    </div>
                    <div className={styles.landingtextsmall}>
                    Even adults who exercise regularly and eat a healthy diet will face the diseases of aging and rely on an unpaid caregiver or become one. Think of an 80-year-old who has exercised regularly for decades and still gets cancer “just” because of their biological age. This creates a significant burden on populations of all incomes and ages. In 2020, some 38 million Americans provided 36 billion hours of unpaid care. By 2029, the United States will spend $3 trillion yearly — half its federal budget — on the medical treatment and social care of adults aged 65 or older.  
                    </div>
            </div>
        </div>
      </div>
      {/* <div className={styles.halfspace}></div> */}
      <div className={styles.space}></div>

      <div className={styles.landingtextlightcontainer2}>
        <div className={styles.landingtextlightinnercontainer2}>
            <div className={styles.landingtextleft2}>
                <div className={styles.landingtextlarge}>
                Scientific breakthroughs from the 20th century allowed us to keep millions of older adults alive. 
                </div>
            </div>
            <div className={styles.landingtextright2}>
                    <div className={styles.landingtextsmall}>
                    This is good news, since biologically old humans are more productive, healthier, and happier than dead ones. Yet it’s not good news that in 2024, age-related conditions like cancer, dementia and menopause still begin to show up at nearly the same age as they did in 300 BC. When it comes to “longevity,” private markets have mostly produced a $200B unproven supplements industry, and treatments for late-stage diseases. To date, no therapeutic has been designed to prevent biological aging. 
                    </div>
                    <div className={styles.landingtextsmall}>
                    In this open project, we present a roadmap of market failures and scientific challenges that stand in the way of real advancements in aging science. Then, we use an open-source model to simulate how new R&D breakthroughs could impact the U.S. population and economy. 
                    </div>
            </div>
        </div>
      </div>

      <div className={styles.space}></div>

      <div className={styles.landingoutertext}>
        <div className={`${styles.landinginnertext} ${styles.light} ${styles.landingmedium}`}>
        What if new scientific breakthroughs could delay biological aging and extend healthy life?
        </div>
        <div className={`${styles.landinginnertext} ${styles.light} ${styles.landingsmall}`}>
        <div className={`${styles.landingtextsmall} ${styles.maxwidth500}`}>
        We present results informed by interviews with 72 scientists and dozens of economists. But our model lets you simulate different futures for the U.S. population and economy. You can input the number of years until a therapeutic can safely delay brain or overall aging; what percentage of the U.S. population would benefit; and how this could affect <span className={styles.textmortality}>mortality</span>, <span className={styles.textproductivity}>productivity</span>, and <span className={styles.textfertility}>fertility</span> rates by age. In each simulation, we present the number of lives saved or gained. We also highlight GDP as a helpful (even if imperfect) proxy for lives improved.<br></br><br></br>

        Beyond a certain point, improvements in non-cognitive functions have counterintuitive effects on GDP. For instance, a 1-year delay in brain aging is worth nearly as much as a 1-year delay in overall biological aging in the near term. This is  because the returns from improving the age of other organs (e.g. kidneys or ovaries) are not immediate, and sometimes reduce GDP temporarily. To understand the non-linear effects of each R&D area in the short and long run  (and for GDP alternatives that measure non-market outcomes), see the report.

        </div>
        </div>
      </div>

      <div className={styles.space}></div>

      <div className={styles.landingoutertext}>
        <div className={`${styles.landinginnertext} ${styles.light} ${styles.landingmedium}`}>
        Delaying biological aging by just 1 year could boost U.S. GDP by $426B per year, yielding $22.5T over several decades & saving 1.3M lives.
        </div>
        <div className={`${styles.landinginnertext} ${styles.light} ${styles.landingsmall}`}>
        <div className={`${styles.landingsmall2}`}>
        Slower aging would mean lower medical costs, fewer unpaid caretakers, lower mortality rates, slightly higher fertility rates, and increased productivity for the growing number of older adults who choose to remain in the workforce.
        </div>
        </div>
      </div>


      {/* <div className={styles.halfspace}></div> */}
        </>
    )



}
export default Landingcontent