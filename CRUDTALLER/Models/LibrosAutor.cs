using System;
using System.Collections.Generic;

namespace CRUDCamilaDuqueEF.Models;

public partial class LibrosAutor
{
    public int Id { get; set; }

    public int? IdAutor { get; set; }

    public string? Isbn { get; set; }

    public virtual Autor? IdAutorNavigation { get; set; }

    public virtual Libro? IsbnNavigation { get; set; }
}
