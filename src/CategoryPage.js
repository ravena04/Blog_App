import React from 'react';
import { useParams } from 'react-router-dom';
import './CategoryPage.css';

const CategoryPage = () => {
  const { categoryName } = useParams(); // Get categoryName from URL

  const categoryData = {
    technology: [
      { 
        title: "TechCrunch",  
        link: "https://techcrunch.com/tag/blogs/", 
        image: "https://findvectorlogo.com/wp-content/uploads/2019/07/techcrunch-vector-logo.png"
      },
      { 
        title: "The Next Web", 
        link: "https://thenextweb.com/", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9lZLQg9OJNiHTTPvKZxDhJK4kKz47cWl7QQ&s"
      },
      { 
        title: "Wired", 
        link: "https://www.wired.com/", 
        image: "https://autonomy.work/wp-content/uploads/2020/09/wired-logo.jpg"
      },
      { 
        title: "CNET", 
        link: "https://www.cnet.com/", 
        image: "https://www.cnet.com/favicon.ico"
      },
      { 
        title: "The Verge", 
        link: "https://www.theverge.com/", 
        image: "https://www.theverge.com/favicon.ico"
      }
    ],
    health: [
      { 
        title: "Bay Health", 
        link: "https://www.bayhealth.org/community-wellness/blog?", 
        image: "https://www.achievers.com/wp-content/uploads/2020/10/bayhealth-logo.jpg"
      },
      { 
        title: "HealthyPlace", 
        link: "https://www.healthyplace.com/blogs", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0tYNpT-fZFXgQ_3QGn3dLbVU5d93rcvfedQ&s"
      },
      { 
        title: "EveryDay Health", 
        link: "https://www.everydayhealth.com/", 
        image: "https://www.everydayhealth.com/favicon.ico"
      },
      { 
        title: "Unlimit Health", 
        link: "https://unlimithealth.org/news/?gad_source=1&gclid=Cj0KCQiAwOe8BhCCARIsAGKeD56iXiLee3zMd68aKrk5vKaRCBF-VYilgOpD6bywgt4-hC1CbCwMTkwaAuVdEALw_wcB", 
        image: "https://upload.wikimedia.org/wikipedia/en/5/50/Unlimit_Health_logo.jpg"
      },
      { 
        title: "Wilson Disease", 
        link: "https://wilsondisease.org/living-with-wilson-disease/copper-conscious-eating/?gad_source=1&gclid=Cj0KCQiAwOe8BhCCARIsAGKeD55EkqqTWex7w-Lp1S7o1lFEHiBgldAIsPEGMOeI3sLC3v5qyEE2AMoaAjYnEALw_wcB", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqRHaQPnVZHnW6rKw64SinnG4q3X5dkrL5AQ&s"
      }
    ],
    lifestyle: [
      { 
        title: "Naina.Co", 
        link: "https://www.naina.co/", 
        image: "https://www.naina.co/wp-content/uploads/2017/01/cropped-Naina.co_.png"
      },
      { 
        title: "Tips Clear", 
        link: "https://www.tipsclear.com/lifestyle/", 
        image: "https://www.tipsclear.com/favicon.ico"
      },
      { 
        title: "FilmFlare", 
        link: "https://www.filmfare.com/celeb-lifestyle-and-fashion", 
        image: "https://i.pinimg.com/736x/97/41/43/974143e6141ec32159a4df17bce59ca7.jpg"
      },
      { 
        title: "Upload Article",  
        link: "https://uploadarticle.com/", 
        image: "https://i1.feedspot.com/200/5018054.jpg?t=1606915869"
      },
      { 
        title: "Aura of Thoughts", 
        link: "https://www.auraofthoughts.com/", 
        image: "https://www.auraofthoughts.com/favicon.ico"
      }
    ],
    education: [
      { 
        title: "Edutopia", 
        link: "https://www.edutopia.org/", 
        image: "https://library.highereduhry.ac.in/Data/ImportantLinks/ImageLogo29.png"
      },
      { 
        title: "eLearning Industry", 
        link: "https://elearningindustry.com/articles", 
        image: "https://elearningindustry.com/favicon.ico"
      },
      { 
        title: "EdSurge",  
        link: "https://www.edsurge.com/", 
        image: "https://www.edsurge.com/favicon.ico"
      },
      { 
        title: "Getting Smart",  
        link: "https://www.gettingsmart.com/blog/", 
        image: "https://media.licdn.com/dms/image/v2/D560BAQHZyekOwdbjHA/company-logo_200_200/company-logo_200_200/0/1726187012990/getting_smart_logo?e=2147483647&v=beta&t=UcNjra_o8CEIOhkf8WcUEbQrCeQonw3WkFl8TQk7bC4"
      },
      { 
        title: "EdTech Review",  
        link: "https://www.edtechreview.in/", 
        image: "https://www.edtechreview.in/favicon.ico"
      }
    ],
    business: [
      { 
        title: "Business Insider",  
        link: "https://www.businessinsider.com/", 
        image: "https://www.businessinsider.com/favicon.ico"
      },
      { 
        title: "Shopify", 
        link: "https://www.shopify.com/in/blog", 
        image: "https://www.shopify.com/favicon.ico"
      },
      { 
        title: "Niche Pursuits",  
        link: "https://www.nichepursuits.com/blog/", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ln3_xMwpuxUUW0Xl7aIgivO4bbfLorraKQ&s"
      },
      { 
        title: "AllBusiness.com",  
        link: "https://www.allbusiness.com/", 
        image: "https://assets.rbl.ms/32345460/origin.png"
      },
      { 
        title: "Foundr", 
        link: "https://foundr.com/articles", 
        image: "https://foundr.com/favicon.ico"
      }
    ]
  };

  const selectedCategoryBlogs = categoryData[categoryName] || [];

  return (
    <div className="category-page">
      <h1>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Blogs</h1>
      <div className="blog-list">
        {selectedCategoryBlogs.length > 0 ? (
          selectedCategoryBlogs.map((blog, index) => (
            <div className="blog-post" key={index}>
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <h2>{blog.title}</h2>
              <a href={blog.link} target="_blank" rel="noopener noreferrer" className="explore-button">Explore</a>
            </div>
          ))
        ) : (
          <p>No blogs available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
