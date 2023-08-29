import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'selection-lists-container',
  templateUrl: './selection-lists-container.component.html',
  styleUrls: ['./selection-lists-container.component.css']
})
export class SelectionListsContainer {

  @Output() updateDockerfileEvent = new EventEmitter<string>();

  updateDockerfile($event: string) {
    this.updateDockerfileEvent.emit($event);
  }

  selectionLists: any = [
    {
      "title": "OS",
      "propertyName": "os",
      "selections": [
        {
          "name": "Linux",
          "dockerfileText": "FROM ubuntu:22.04"
        },
        {
          "name": "Windows",
          "dockerfileText": "FROM ubuntu:22.04"
        },
        {
          "name": "MacOS",
          "dockerfileText": "FROM ubuntu:22.04"
        },
      ]
    },
    {
      "title": "Languages",
      "propertyName": "language",
      "selections": [
        {
          "name": "Java",
          "dockerfileText": "RUN apt update -y && apt install openjdk-17-jre -y"
        },
        {
          "name": "Python",
          "dockerfileText": "FROM python:3"
        },
        {
          "name": "JavaScript",
          "dockerfileText": "FROM node:16"
        },
      ]
    },
    {
      "title": "Frameworks",
      "propertyName": "framework",
      "selections": [
        {
          "name": "Angular",
          "dockerfileText": "RUN npm install -g @angular/cli"
        },
        {
          "name": "React",
          "dockerfileText": "RUN npm install -g react react-dom"
        },
      ]
    },
    {
      "title": "Build Tools",
      "propertyName": "buildtools",
      "selections": [
        {
          "name": "Maven",
          "dockerfileText": "RUN mkdir -p /usr/share/maven /usr/share/maven/ref \\\n\t&& apt install -y curl \\\n\t&& curl -fsSL -o /tmp/apache-maven.tar.gz https://mirrors.estointernet.in/apache/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz \\\n\t&& tar -xzf /tmp/apache-maven.tar.gz -C /usr/share/maven --strip-components=1 \\\n\t&& rm -f /tmp/apache-maven.tar.gz \\\n\t&& ln -s /usr/share/maven/bin/mvn /usr/bin/mvn\nENV MAVEN_HOME /usr/share/maven\nENV MAVEN_CONFIG \"$USER_HOME_DIR/.m2\""
        },
        {
          "name": "Gradle",
          "dockerfileText": "RUN mkdir -p /usr/share/gradle /usr/share/gradle/ref \\\n\t&& apt install -y curl \\\n\t&& curl -fsSL -o /tmp/gradle.zip https://services.gradle.org/distributions/gradle-5.0-bin.zip \\\n\t&& apt install unzip -y \\\n\t&& unzip -d /usr/share/gradle /tmp/gradle.zip \\\n\t&& rm -f /tmp/gradle.zip \\\n\t&& ln -s /usr/share/gradle/gradle-5.0/bin/gradle /usr/bin/gradle"
        },
      ]
    },
    {
      "title": "Jenkins",
      "propertyName": "jenkins",
      "selections": [
        {
          "name": "Server",
          "dockerfileText": "node"
        },
        {
          "name": "Agent",
          "dockerfileText": "node"
        },
      ]
    },
    {
      "title": "Cloud Tools",
      "propertyName": "cloud",
      "selections": [
        {
          "name": "Azure CLI",
          "dockerfileText": "RUN curl --location --silent --output azure-cli_jammy.deb https://aka.ms/InstallAzureCliJammyEdge && dpkg -i azure-cli_jammy.deb"
        },
        {
          "name": "AWS CLI",
          "dockerfileText": "RUN curl https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip -o awscliv2.zip \\\n\t&& unzip awscliv2.zip \\\n\t&& ./aws/install"
        },
      ]
    },
  ];

}
