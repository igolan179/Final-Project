USE [CosmeticDB]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 24-Nov-20 10:09:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[CustomerId] [varchar](50) NOT NULL,
	[CustomerPass] [varchar](50) NOT NULL,
	[CustomerName] [varchar](50) NOT NULL,
	[CustomerPhone] [int] NOT NULL,
	[CustomerQueue] [int] NULL,
 CONSTRAINT [PK__Customer__A4AE64D857A08726] PRIMARY KEY CLUSTERED 
(
	[CustomerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CustomerQueue]    Script Date: 24-Nov-20 10:09:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomerQueue](
	[Id] [int] NOT NULL,
	[QueueDate] [datetime] NOT NULL,
	[Treatment] [int] NOT NULL,
	[Comments] [varchar](255) NULL,
 CONSTRAINT [PK__Customer__3214EC075C209D46] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Treatment]    Script Date: 24-Nov-20 10:09:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Treatment](
	[Id] [int] NOT NULL,
	[TreatmentName] [varchar](50) NOT NULL,
 CONSTRAINT [PK__Treatmen__3214EC07F0F90538] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Customer]  WITH CHECK ADD  CONSTRAINT [FK__Customer__Custom__29572725] FOREIGN KEY([CustomerQueue])
REFERENCES [dbo].[CustomerQueue] ([Id])
GO
ALTER TABLE [dbo].[Customer] CHECK CONSTRAINT [FK__Customer__Custom__29572725]
GO
ALTER TABLE [dbo].[CustomerQueue]  WITH CHECK ADD  CONSTRAINT [FK__CustomerQ__Treat__267ABA7A] FOREIGN KEY([Treatment])
REFERENCES [dbo].[Treatment] ([Id])
GO
ALTER TABLE [dbo].[CustomerQueue] CHECK CONSTRAINT [FK__CustomerQ__Treat__267ABA7A]
GO
