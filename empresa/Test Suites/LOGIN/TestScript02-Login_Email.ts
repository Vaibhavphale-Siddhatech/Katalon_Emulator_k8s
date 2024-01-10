<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>TestScript02-Login_Email</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>77602143-5ea7-49f5-8136-2f2147c0c8fd</testSuiteGuid>
   <testCaseLink>
      <guid>dc708cde-a3ef-4977-9086-518a07e7fe60</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>''</defaultValue>
         <description></description>
         <id>53bb3e28-3765-4436-94e9-71ef27055b6d</id>
         <masked>false</masked>
         <name>Env</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/TC-Scenarios/APPLAUNCH/TC_AppLaunch</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>28c8a024-2a0a-4f1d-a2a9-50697af73d54</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Excel-Data/LaunchApp</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>28c8a024-2a0a-4f1d-a2a9-50697af73d54</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>ID</value>
         <variableId>4e7c05ac-134e-4dad-9e27-70cccda67baf</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>28c8a024-2a0a-4f1d-a2a9-50697af73d54</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Description</value>
         <variableId>53bb3e28-3765-4436-94e9-71ef27055b6d</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>28c8a024-2a0a-4f1d-a2a9-50697af73d54</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>AppPath</value>
         <variableId>6e0bbae3-8223-4792-b239-e73e7a40f7ee</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>28c8a024-2a0a-4f1d-a2a9-50697af73d54</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>SIB</value>
         <variableId>b1e8ddc5-6171-4c69-9a1d-551cf56c7b36</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>23704bf7-241c-4759-81e2-791ba522f328</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>''</defaultValue>
         <description></description>
         <id>6f6eb98b-be86-4eab-9278-52c93cc1b809</id>
         <masked>false</masked>
         <name>Description</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/TC-Scenarios/LOGIN/TC_Login</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>43a53100-a889-41de-b9e1-b8535f565844</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Excel-Data/AppLogin</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>43a53100-a889-41de-b9e1-b8535f565844</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>ID</value>
         <variableId>0a65f87d-9ba2-4623-bce2-6237fbe32e44</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>43a53100-a889-41de-b9e1-b8535f565844</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Description</value>
         <variableId>6f6eb98b-be86-4eab-9278-52c93cc1b809</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>43a53100-a889-41de-b9e1-b8535f565844</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>RNC</value>
         <variableId>b1dd235f-89e5-4ed9-973d-043890533b9e</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>43a53100-a889-41de-b9e1-b8535f565844</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Username</value>
         <variableId>17cba892-0afa-49e5-9ab8-eeb14ba5ee85</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>43a53100-a889-41de-b9e1-b8535f565844</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Password</value>
         <variableId>c4dff9c2-d04f-4257-8990-58e8d3f21cbb</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>3d97a9c7-4611-4f26-b452-ea0dbda17a75</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>''</defaultValue>
         <description></description>
         <id>1da9816c-d468-472a-8f03-95a3f69b29c7</id>
         <masked>false</masked>
         <name>Description</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/TC-Scenarios/LOGIN/TC_EMAIL</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>9ac207e2-5a50-49c3-9a6d-ece39489d469</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Excel-Data/Email</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>9ac207e2-5a50-49c3-9a6d-ece39489d469</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>ID</value>
         <variableId>81260e67-8106-4380-b726-961901224ff8</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>9ac207e2-5a50-49c3-9a6d-ece39489d469</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Description</value>
         <variableId>1da9816c-d468-472a-8f03-95a3f69b29c7</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>9ac207e2-5a50-49c3-9a6d-ece39489d469</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Email</value>
         <variableId>a2a7e7b4-4973-4bbc-ada5-299894596c36</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>