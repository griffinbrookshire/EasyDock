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
          "dockerfileText": "# Use Linux OS\nFROM ubuntu:22.04"
        },
      ]
    },
    {
      "title": "Languages",
      "propertyName": "language",
      "selections": [
        {
          "name": "Java",
          "dockerfileText": "# Install Java 17\nRUN apt update -y && apt install openjdk-17-jre -y"
        },
        {
          "name": "Python",
          "dockerfileText": "# Install Python 3\nRUN apt update -y && apt install python3 -y"
        },
        {
          "name": "JavaScript",
          "dockerfileText": "# Install Node 12\nRUN apt update -y && apt install nodejs npm -y"
        },
      ]
    },
    {
      "title": "Frameworks",
      "propertyName": "framework",
      "selections": [
        {
          "name": "Angular",
          "dockerfileText": "# Install Angular\nRUN npm install -g @angular/cli"
        },
        {
          "name": "React",
          "dockerfileText": "# Install React\nRUN npm install -g react react-dom"
        },
      ]
    },
    {
      "title": "Build Tools",
      "propertyName": "buildtools",
      "selections": [
        {
          "name": "Maven",
          "dockerfileText": "# Install Maven\nRUN mkdir -p /usr/share/maven /usr/share/maven/ref \\\n\t&& apt install -y curl \\\n\t&& curl -fsSL -o /tmp/apache-maven.tar.gz https://mirrors.estointernet.in/apache/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz \\\n\t&& tar -xzf /tmp/apache-maven.tar.gz -C /usr/share/maven --strip-components=1 \\\n\t&& rm -f /tmp/apache-maven.tar.gz \\\n\t&& ln -s /usr/share/maven/bin/mvn /usr/bin/mvn\nENV MAVEN_HOME /usr/share/maven\nENV MAVEN_CONFIG \"$USER_HOME_DIR/.m2\""
        },
        {
          "name": "Gradle",
          "dockerfileText": "# Install Gradle\nRUN mkdir -p /usr/share/gradle /usr/share/gradle/ref \\\n\t&& apt install -y curl \\\n\t&& curl -fsSL -o /tmp/gradle.zip https://services.gradle.org/distributions/gradle-5.0-bin.zip \\\n\t&& apt install unzip -y \\\n\t&& unzip -d /usr/share/gradle /tmp/gradle.zip \\\n\t&& rm -f /tmp/gradle.zip \\\n\t&& ln -s /usr/share/gradle/gradle-5.0/bin/gradle /usr/bin/gradle"
        },
      ]
    },
    {
      "title": "Jenkins",
      "propertyName": "jenkins",
      "selections": [
        {
          "name": "Server",
          "dockerfileText": "# Install Jenkins Server\n# Need to ssh into container and run:\n#\t`service jenkins restart`\n#\t`cat /var/lib/jenkins/secrets/initialAdminPassword`\n# Run docker container with `-p <host-ip>:8080:8080/tcp`\nRUN apt install -y curl \\\n\t&& curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | tee /usr/share/keyrings/jenkins-keyring.asc > /dev/null \\\n\t&& echo 'deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/' | tee /etc/apt/sources.list.d/jenkins.list > /dev/null \\\n\t&& apt update -y && apt install jenkins -y \\\n\t&& service jenkins restart"
        },
      ]
    },
    {
      "title": "Cloud Tools",
      "propertyName": "cloud",
      "selections": [
        {
          "name": "Azure CLI",
          "dockerfileText": "# Install Azure CLI\nRUN apt update -y \\\n\t&& apt install curl -y \\\n\t&& curl --location --silent --output azure-cli_jammy.deb https://aka.ms/InstallAzureCliJammyEdge \\\n\t&& dpkg -i azure-cli_jammy.deb"
        },
        {
          "name": "AWS CLI",
          "dockerfileText": "# Install AWS CLI\nRUN apt update -y \\\n\t&& apt install -y curl \\\n\t&& curl https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip -o awscliv2.zip \\\n\t&& apt install -y unzip \\\n\t&& unzip awscliv2.zip \\\n\t&& ./aws/install"
        },
      ]
    },
  ];

}
