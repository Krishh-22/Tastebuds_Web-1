# Tastebuds_Web-1

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>TasteBud Express</title>
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <div class="container">
                <div class="d-flex align-items-center">
                    <!-- Your logo code -->
                    <div id="logo" class="me-2">
                        <img src="Logo.png" alt="TasteBud Express Logo" style="height: 40px;"> <!-- Adjust height as needed -->
                    </div>
                    <a class="navbar-brand" href="javascript:void(0);" onclick="showSection('home')">TasteBud Express</a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="javascript:void(0);" onclick="showSection('home')">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="javascript:void(0);" onclick="showSection('about')">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="javascript:void(0);" onclick="showSection('contact')">Contact</a></li>
                        <li class="nav-item"><a class="nav-link" href="javascript:void(0);" onclick="showSection('queries')">Queries</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <!-- Home Section -->
    <section id="home" class="section active">
        <div class="hero">
            <div class="text-center">
                <h1>Welcome to TasteBud Express</h1>
                <p>Delicious meals delivered fast to your doorstep!</p>
                <img src="delMan.png" alt="Delicious Food" class="food-image">
                <a href="javascript:void(0);" onclick="showSection('contact')" class="btn btn-primary btn-lg">Order Now</a>
            </div>
        </div>
        <div class="container mt-5">
            <h2>Our Popular Dishes</h2>
            <div class="row">
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img src="dish1.jpg" alt="Dish 1">
                        <div class="card-body">
                            <h5 class="card-title">Gajar Halwa</h5>
                            <p class="card-text">A delightful North Indian dessert made with fresh carrots, milk, and aromatic spices!</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img src="dish2.jpg" class="card-img-top" alt="Dish 2">
                        <div class="card-body">
                            <h5 class="card-title">Chilli Paneer</h5>
                            <p class="card-text">Chilli Paneer: Fiery, zesty paneer cubes with bell peppers, onions, and a punchy tang! </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img src="dish3.jpg" class="card-img-top" alt="Dish 3">
                        <div class="card-body">
                            <h5 class="card-title">Caesar Salad</h5>
                            <p class="card-text">Crisp romaine lettuce with Caesar dressing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
        <div class="container">
            <h2>About Us</h2>
            <p>TasteBud Express is your go-to solution for quick and tasty meals. We partner with local restaurants to bring you a variety of dishes right to your door, ensuring freshness and quality.</p>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
        <div class="container mt-5">
            <h2>Contact Us</h2>
            <form id="contactForm" onsubmit="saveData(event)" class="needs-validation" novalidate>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" required>
                    <div class="invalid-feedback">Please enter your name.</div>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" required>
                    <div class="invalid-feedback">Please enter a valid email address.</div>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" id="message" rows="3" required></textarea>
                    <div class="invalid-feedback">Please enter your message.</div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </section>

    <!-- Queries Section -->
    <section id="queries" class="section">
        <div class="container mt-5">
            <h2>Saved Queries</h2>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody id="data-table-body">
                    <!-- Data will be populated here -->
                </tbody>
            </table>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 TasteBud Express. All rights reserved.</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="scripts.js"></script>
</body>
</html>
