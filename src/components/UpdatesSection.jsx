const UpdatesSection = () => {
    // News articles data
    const newsArticles = [
      {
        title: "RSV Vaccine for Infants Gets FDA Approval",
        date: "March 27, 2025",
        image: "https://c.animaapp.com/m8sql0mhBjidY2/img/image-85.png",
        description:
          "The Centers for Disease Control and Prevention (CDC) recommends that all infants under 8 months receive the vaccine to protect against respiratory syncytial virus.",
      },
      {
        title: "HPV Vaccine Expanded to Adults Up to 45",
        date: "March 27, 2025",
        image: "https://c.animaapp.com/m8sql0mhBjidY2/img/cdc-bkc-m0iz4sk-unsplash-1.png",
        description:
          "The FDA has approved the expanded use of HPV vaccines for adults aged 27-45, offering protection against several types of cancer caused by human papillomavirus.",
      },
      {
        title: "Dengue Fever Outbreak in Southeast Asia",
        date: "March 27, 2025",
        image: "https://c.animaapp.com/m8sql0mhBjidY2/img/image-88.png",
        description:
          "The Centers for Disease Control and Prevention (CDC) has issued a travel advisory for Southeast Asia due to a significant increase in dengue fever cases.",
      },
    ]
  
    const NewsArticleCard = ({ article }) => (
      <div className="flex mb-6 bg-white rounded-lg overflow-hidden shadow-sm">
        <div className="w-1/2">
          <img className="h-full w-full object-cover" alt={article.title} src={article.image || "/placeholder.svg"} />
        </div>
        <div className="w-1/2 p-4 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-[#010b2a] text-base mb-1">{article.title}</h3>
            <p className="text-xs text-gray-600 line-clamp-2">{article.description}</p>
          </div>
          <p className="text-xs text-[#021655] font-medium">{article.date}</p>
        </div>
      </div>
    )
  
    return (
      <div className="container mx-auto px-4 py-12 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute w-[29px] h-[29px] top-[174px] right-[500px] bg-[#e5f6ff] rounded-[14.5px]" />
        <div className="absolute w-[127px] h-[430px] top-[200px] right-[100px] bg-[#bee9fe66] rounded-[65.5px] rotate-45 z-0" />
        <div className="absolute w-32 h-[479px] top-[-25px] right-[120px] bg-[#bee9fe66] rounded-[65.5px] rotate-45 z-0" />
        <div className="absolute w-[127px] h-[353px] top-[-7px] right-[280px] bg-[#bee9fe66] rounded-[65.5px] rotate-45 z-0" />
        <div className="absolute w-16 h-16 top-[150px] right-[350px] bg-[#e5f6ff] rounded-[32px] z-0" />
  
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Rest of the component remains the same */}
          {/* Header Section */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-[#010b2a]">
              Latest Vaccine <span className="text-[#0047ab]">&amp; Health</span>
              <br />
              Updates
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Stay informed about the newest vaccine approvals, health advisories, and virus outbreaks to protect yourself
              and your community.
            </p>
          </div>
  
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* COVID Booster Section - Takes up 2 columns */}
            <div className="lg:col-span-2 bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/2 relative bg-[#e5f6ff]">
                  {/* Add decorative circle to the COVID section */}
                  <div className="absolute w-16 h-16 bottom-[50px] left-[50px] bg-[#e5f6ff] rounded-[32px] z-10" />
                  <div className="absolute w-[127px] h-[436px] top-[-19px] left-[50px] bg-[#bee9fe66] rounded-[65.5px] rotate-45 z-0" />
                  <img
                    className="w-full h-full object-cover relative z-5"
                    alt="COVID-19 Vaccine"
                    src="https://c.animaapp.com/m8sql0mhBjidY2/img/towfiqu-barbhuiya-j1dzpfts4gu-unsplash-1.png"
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#010b2a] mb-2">New COVID 19 Booster approved</h3>
                    <p className="text-sm text-[#021655] font-medium mb-4">March 27, 2025</p>
                    <div className="bg-white rounded mb-4">
                      <p className="text-[#010b2b] text-sm font-semibold">
                        The U.S. Food and Drug Administration (FDA) has approved updated mRNA COVID-19 vaccines to better
                        protect against currently circulating variants.
                      </p>
                    </div>
                    <p className="text-sm text-[#010b2b] mb-4">
                      The Centers for Disease Control and Prevention (CDC) recommends the updated vaccine for all adults 6
                      months and older to maintain optimal protection against COVID.
                    </p>
                  </div>
                  <div className="flex justify-between mt-4">
                    <button className="px-4 py-2 border border-[#010b2a] text-[#010b2a] font-bold rounded-md text-sm">
                      Check your Eligibility
                    </button>
                    <button className="px-4 py-2 bg-[#010b2a] text-white font-bold rounded-md text-sm">Read More</button>
                  </div>
                </div>
              </div>
            </div>
  
            {/* News Articles Column */}
            <div className="lg:col-span-1 relative">
              {/* Add decorative circle to the news section */}
              <div className="absolute w-[29px] h-[29px] top-[20px] left-[15px] bg-[#e5f6ff] rounded-[14.5px] z-0" />
              <div className="space-y-4 relative z-10">
                {newsArticles.map((article, index) => (
                  <NewsArticleCard key={index} article={article} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default UpdatesSection
  
  