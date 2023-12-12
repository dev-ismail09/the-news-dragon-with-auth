import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsight from "./EditorsInsight/EditorsInsight";

const News = () => {
  const newsDetails = useLoaderData();
  // console.log(newsDetails)
  const { _id, title, details, image_url, category_id } = newsDetails;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/catagory/${category_id}`}>
            <Button variant="danger">
              <FaAngleLeft />
              All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsight></EditorsInsight>
    </div>
  );
};

export default News;
