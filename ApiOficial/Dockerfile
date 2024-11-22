FROM adoptopenjdk:11-jre-hotspot
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} Api-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/Api-0.0.1-SNAPSHOT.jar"]