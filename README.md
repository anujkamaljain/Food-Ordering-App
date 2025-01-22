# FOOD ORDERING APP


# Rough Structure

Header
 - Logo
 - Nav Items
Body
 - Search module
 - Restaurant Container
    - Restaurant Cards
          - Restaurant name
          - Restaurant Rating
          - Types of cuisines
          - Offers
Footer
  - Copyright & License
  - Links
  - Address of Company
  - Contact Information

//Passing Props for dynamic data in cards

Two types of import export
1. default import/export - used to export a single Component and import syntax - import resList from ../../..
2. named export/import - used to export multiple Component and import syntax - import {resList} from ../../..

(we need to pass body as children as we want our header and footer to stay constant on all the pages so we want our body to only change as our path changes so we pass them as children and we use (**Outlet**) from react-router-dom which gets filled with children when the path changes.)