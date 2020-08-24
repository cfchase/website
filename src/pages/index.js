import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import Layout from '../components/layout'
import { Link } from 'gatsby'
import '../styles/_index.scss'

export default function Home() {
  
  return (
    
  
    <Layout>       
    <main role="main" className="main home">
    <div id="particles" className="jumbotron particles">
        <div className="image-container">
            <img className="jumbotron-img" src="assets/img/logos/datahub_color_vert-gry-bg.png" alt="DATA HUB ICON" />
        </div>
        <div className="title-text-container">
            <h1>A Data & AI Platform for the Hybrid Cloud</h1>
        </div>
        <div className="button-container">
            <a className="btn btn-lg btn-primary btn-getting-started"
               href="/docs"
               role="button">Get started
            </a>
        </div>
    </div>    
    
    <div className="jumbotron small">
        <div className="image-container">
            <img className="jumbotron-img" src="assets/img/logos/datahub_color_vert-gry-bg.png" alt="DATA HUB ICON"/>
        </div>
        <div className="title-text-container">
            <h1>A Data & AI Platform for the Hybrid Cloud</h1>
        </div>
        <div className="button-container">
            <Link className="btn btn-lg btn-primary btn-getting-started"
               to="/docs-sidebar"
               role="button"> Get started
            </Link>
        </div>
    </div>  

    <div className="container what-is">
        <div className="row dh-info">
            <div className="dh-info-text-container offset-md-1 col-md-10">
                <div className="dh-info-section">
                    <h2 className="dh-info-title">What is Open Data Hub?</h2>
                    <p>
                        Open Data Hub is a blueprint for building an AI as a service platform on Red Hat's <a href="https://kubernetes.io/">Kubernetes</a>-based 
                        <a href="https://www.openshift.com/">OpenShift&reg; Container Platform</a> and
                        <a href="https://www.redhat.com/en/technologies/storage/ceph"> Ceph Object Storage</a>. It inherits from upstream efforts 
                        such as <a href="https://strimzi.io/">Kafka/Strimzi</a> and <a href="https://www.kubeflow.org/">Kubeflow</a>, and is the foundation for Red Hat's internal data science and AI platform.
                        Data scientists can create models using Jupyter notebooks, and select from popular tools such as
                        <a href="https://www.tensorflow.org/">TensorFlow&trade;</a>, <a href="http://scikit-learn.org/stable/index.html">scikit-learn</a>,
                        <a href="http://spark.apache.org/">Apache Spark&trade;</a> and more for developing models.
                        Teams can spend more time solving critical business needs and less on installing and maintaining infrastructure with the Open Data Hub.
                    </p>
                    <p>
                        Open Data Hub is a meta-project that integrates open source projects into a practical solution.
                        It aims to foster collaboration between communities, vendors, user-enterprises, and academics
                        following open source best practices.  The <strong>open source community</strong> can
                        experiment and develop <strong>intelligent applications</strong> without incurring high costs and
                        having to master the complexity of modern machine learning and artificial intelligence software stacks.
                    </p>
                    <p>
                        Read about the new features coming to Open Data Hub in our <a href="{{ '/docs/roadmap/future.html' | prepend: site.baseurl }}">Project Road Map</a>.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="full-width-image">
        <img src="assets/img/datahub_flow.png" alt="Data Hub Parts"></img> 
    </div>
    <div className="container getting-started">
        <div className="row dh-info">
            <div className="dh-info-text-container offset-md-1 col-md-10">
                <div className="dh-info-section">
                    <h2 className="dh-info-title">Getting Started</h2>
                    <p>
                        For additional information about the Open Data Hub, read
                        our <a href="/news">blogs</a> and <a href="{{ '/docs.html' | prepend: site.baseurl }}">documentation</a>.
                    </p>
                    <p>
                        To set up the Open Data Hub, all you need is a running <a href="https://www.openshift.com/">OpenShift&reg;</a>
                        cluster. For storing data and models, we recommend using a S3 object store such as
                        <a href="https://ceph.com/ceph-storage/object-storage/">Ceph</a>.
                        Once your OpenShift and Ceph installations are running, deploy the Open Data Hub components
                        using our <a href="https://www.ansible.com/">Ansible</a> playbooks and OpenShift&reg; deployment
                        templates.
                    </p>
                </div>
                <div className="dh-info-section">
                    <p>
                        <a className="btn" role="button"  href="{{ '/docs/getting-started/quick-installation.html' | prepend: site.baseurl }}">
                            Installation
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</main>
</Layout>
  )
}