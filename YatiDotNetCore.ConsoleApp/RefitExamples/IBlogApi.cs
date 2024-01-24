using YatiDotNetCore.ConsoleApp.Models;
using Refit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace YatiDotNetCore.ConsoleApp.RefitExamples
{
    public interface IBlogApi
    {
        [Get("/api/blog")]
        Task<List<BlogDataModel>> GetBlogs();

        [Get("/api/blog/{id}")]
        Task<BlogDataModel> GetBlog(int id);

        [Post("/api/blog")]
        Task<string> CreateBlog(BlogDataModel blog);

        [Put("/api/Blog/{id}")]
        Task<string> PutBlog(int id, BlogDataModel blogDataModel);

        [Patch("/api/Blog/{id}")]
        Task<string> PatchBlog(int id, BlogDataModel blogDataModel);

        [Delete("/api/Blog/{id}")]
        Task<string> DeleteBlog(int id);
    }
}
