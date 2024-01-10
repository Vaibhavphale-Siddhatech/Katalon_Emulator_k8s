<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>TestScript01-Login_SMS</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>90ef0a7a-bee3-4239-8854-d6b1266e24fe</testSuiteGuid>
   <testCaseLink>
      <guid>42100634-4fc0-4845-a696-ec46f01be07b</guid>
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
         <id>a0fd9547-3387-4592-b7cb-dd2b4607e692</id>
         <iterationEntity>
            <iterationType>SPECIFIC</iterationType>
            <value>1</value>
         </iterationEntity>
         <testDataId>Data Files/Excel-Data/LaunchApp</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>a0fd9547-3387-4592-b7cb-dd2b4607e692</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>ID</value>
         <variableId>4e7c05ac-134e-4dad-9e27-70cccda67baf</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>a0fd9547-3387-4592-b7cb-dd2b4607e692</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Description</value>
         <variableId>53bb3e28-3765-4436-94e9-71ef27055b6d</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>a0fd9547-3387-4592-b7cb-dd2b4607e692</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>AppPath</value>
         <variableId>6e0bbae3-8223-4792-b239-e73e7a40f7ee</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>a0fd9547-3387-4592-b7cb-dd2b4607e692</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>SIB</value>
         <variableId>b1e8ddc5-6171-4c69-9a1d-551cf56c7b36</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>2f49e24b-4a23-4862-a069-40ee3b5b356c</guid>
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
         <id>fcf27f63-ea94-4a46-9bca-aa087212a929</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value>1-3</value>
         </iterationEntity>
         <testDataId>Data Files/Excel-Data/AppLogin</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>fcf27f63-ea94-4a46-9bca-aa087212a929</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>ID</value>
         <variableId>0a65f87d-9ba2-4623-bce2-6237fbe32e44</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>fcf27f63-ea94-4a46-9bca-aa087212a929</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Description</value>
         <variableId>6f6eb98b-be86-4eab-9278-52c93cc1b809</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>fcf27f63-ea94-4a46-9bca-aa087212a929</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>RNC</value>
         <variableId>b1dd235f-89e5-4ed9-973d-043890533b9e</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>fcf27f63-ea94-4a46-9bca-aa087212a929</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Username</value>
         <variableId>17cba892-0afa-49e5-9ab8-eeb14ba5ee85</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>fcf27f63-ea94-4a46-9bca-aa087212a929</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Password</value>
         <variableId>c4dff9c2-d04f-4257-8990-58e8d3f21cbb</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>0d5b25cd-c2cb-4be1-80df-8e78f3a73394</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>''</defaultValue>
         <description></description>
         <id>b9546980-f37a-41b1-a526-a7db7ea438ec</id>
         <masked>false</masked>
         <name>Description</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/TC-Scenarios/LOGIN/TC_Phone</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>de27ce15-d19e-4279-b12e-887d92cc3eb8</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Excel-Data/Phone</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>de27ce15-d19e-4279-b12e-887d92cc3eb8</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>ID</value>
         <variableId>6d58db8b-afcb-426a-8d9e-97adf36292e2</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>de27ce15-d19e-4279-b12e-887d92cc3eb8</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Description</value>
         <variableId>b9546980-f37a-41b1-a526-a7db7ea438ec</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>de27ce15-d19e-4279-b12e-887d92cc3eb8</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Phone</value>
         <variableId>cd7c10f7-6097-4088-ad7f-d06c055aa06c</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>5aa3ca61-ed21-4918-a82e-5367969203fe</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>''</defaultValue>
         <description></description>
         <id>37116543-fe3d-435d-a184-428df4f6cb93</id>
         <masked>false</masked>
         <name>Description</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/TC-Scenarios/LOGIN/TC_SMS</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>8c9f0d95-41a4-492b-a4df-66b1bb7b6ba5</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Excel-Data/SMS</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>8c9f0d95-41a4-492b-a4df-66b1bb7b6ba5</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>ID</value>
         <variableId>ce9c835a-ee3a-4b3e-8c95-41a6f30c3b60</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>8c9f0d95-41a4-492b-a4df-66b1bb7b6ba5</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Description</value>
         <variableId>37116543-fe3d-435d-a184-428df4f6cb93</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>8c9f0d95-41a4-492b-a4df-66b1bb7b6ba5</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>SMS</value>
         <variableId>72b59a2d-dbbd-4880-97f3-b7644aee4650</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>