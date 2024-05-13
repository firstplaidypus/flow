# Build artifacts

One of the main features of the [flow testing framework](https://github.com/Mastercard/flow) is the production of rich execution reports.
Until such a time as [upload-artifact#14](https://github.com/actions/upload-artifact/issues/14) is addressed, we're reduced to abusing github pages to show these artifacts to best effect.
See [test.yml](https://github.com/Mastercard/flow/blob/main/.github/workflows/test.yml), [mutation.yml](https://github.com/Mastercard/flow/blob/main/.github/workflows/mutation.yml) and [regen_index.pl](https://github.com/Mastercard/flow/blob/pages/regen_index.pl) for the gory details.

## Execution reports

These reports are the result of comparing a unified model of system behaviour against:
 * an instance of the complete system (The "app-itest" report)
 * system components in isolation (everything else)

<!-- start:execution -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>dependabot/maven/info.picocli-picocli-4.7.6</code></th>
			<td><a href="execution/latest/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:51:14</code></th>
			 <th><code>dependabot/maven/info.picocli-picocli-4.7.6</code></th>
			<td><a href="execution/1715561474/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715561474/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715561474/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715561474/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715561474/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715561474/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715561474/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:50:55</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.16.1</code></th>
			<td><a href="execution/1715561455/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715561455/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715561455/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715561455/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715561455/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715561455/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715561455/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:11:20</code></th>
			 <th><code>dependabot/github_actions/ossf/scorecard-action-2.3.3</code></th>
			<td><a href="execution/1715559080/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715559080/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715559080/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715559080/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715559080/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715559080/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715559080/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:10:47</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.5</code></th>
			<td><a href="execution/1715559047/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715559047/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715559047/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715559047/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715559047/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715559047/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715559047/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:03:01</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1715079781/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715079781/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715079781/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715079781/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715079781/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715079781/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715079781/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:00:51</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1715079651/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715079651/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715079651/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715079651/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715079651/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715079651/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715079651/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:00:30</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1715079630/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715079630/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715079630/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715079630/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715079630/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715079630/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715079630/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-07T10:56:40</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1715079400/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1715079400/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1715079400/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1715079400/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1715079400/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1715079400/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1715079400/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-06T01:39:14</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.5</code></th>
			<td><a href="execution/1714959554/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714959554/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714959554/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714959554/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714959554/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714959554/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714959554/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-06T01:35:58</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.12.8</code></th>
			<td><a href="execution/1714959358/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714959358/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714959358/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714959358/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714959358/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714959358/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714959358/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-06T01:32:00</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.5</code></th>
			<td><a href="execution/1714959120/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714959120/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714959120/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714959120/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714959120/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714959120/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714959120/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-06T00:38:15</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-deploy-plugin-3.1.2</code></th>
			<td><a href="execution/1714955895/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714955895/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714955895/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714955895/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714955895/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714955895/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714955895/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-05-06T00:37:54</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.17.1</code></th>
			<td><a href="execution/1714955874/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714955874/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714955874/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714955874/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714955874/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714955874/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714955874/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-29T12:16:26</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1714392986/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714392986/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714392986/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714392986/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714392986/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714392986/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714392986/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-29T12:15:54</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1714392954/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714392954/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714392954/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714392954/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714392954/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714392954/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714392954/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-29T12:14:30</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1714392870/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714392870/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714392870/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714392870/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714392870/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714392870/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714392870/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-29T12:14:11</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1714392851/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714392851/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714392851/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714392851/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714392851/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714392851/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714392851/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:18:29</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-shade-plugin-3.5.3</code></th>
			<td><a href="execution/1714353509/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714353509/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714353509/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714353509/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714353509/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714353509/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714353509/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:08:16</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.4</code></th>
			<td><a href="execution/1714352896/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714352896/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714352896/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714352896/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714352896/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714352896/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714352896/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:07:51</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.7</code></th>
			<td><a href="execution/1714352871/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1714352871/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1714352871/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1714352871/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1714352871/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1714352871/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1714352871/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
	</tbody>
</table>
<!-- end:execution -->

## Mutation testing

Test quality metrics for framework packages.

<!-- start:mutation -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>dependabot/maven/info.picocli-picocli-4.7.6</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:56:42</code></th>
			 <th><code>dependabot/maven/info.picocli-picocli-4.7.6</code></th>
			<td><a href="mutation/1715561802/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:17:56</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.5</code></th>
			<td><a href="mutation/1715559476/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:16:54</code></th>
			 <th><code>dependabot/github_actions/ossf/scorecard-action-2.3.3</code></th>
			<td><a href="mutation/1715559414/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:08:01</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1715080081/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:07:41</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1715080061/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:07:23</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1715080043/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:06:54</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1715080014/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:02:25</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1715079745/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-06T01:45:48</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.5</code></th>
			<td><a href="mutation/1714959948/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-06T01:42:52</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.12.8</code></th>
			<td><a href="mutation/1714959772/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-06T01:37:21</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.5</code></th>
			<td><a href="mutation/1714959441/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-06T00:43:46</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.17.1</code></th>
			<td><a href="mutation/1714956226/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-05-06T00:43:12</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-deploy-plugin-3.1.2</code></th>
			<td><a href="mutation/1714956192/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-29T12:21:25</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1714393285/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-29T12:21:02</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1714393262/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:25:09</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-shade-plugin-3.5.3</code></th>
			<td><a href="mutation/1714353909/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:13:48</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.4</code></th>
			<td><a href="mutation/1714353228/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:13:29</code></th>
			 <th><code>dependabot/github_actions/actions/upload-artifact-4.3.3</code></th>
			<td><a href="mutation/1714353209/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:13:10</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.7</code></th>
			<td><a href="mutation/1714353190/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-04-22T07:20:32</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1713770432/mutation_report/index.html">mutation</a></td>
		</tr>
	</tbody>
</table>
<!-- end:mutation -->

## Angular coverage

Test coverage for the report application.

<!-- start:ng_coverage -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>dependabot/maven/info.picocli-picocli-4.7.6</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:51:14</code></th>
			 <th><code>dependabot/maven/info.picocli-picocli-4.7.6</code></th>
			<td><a href="ng_coverage/1715561474/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:50:55</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.16.1</code></th>
			<td><a href="ng_coverage/1715561455/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:11:20</code></th>
			 <th><code>dependabot/github_actions/ossf/scorecard-action-2.3.3</code></th>
			<td><a href="ng_coverage/1715559080/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-13T00:10:47</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.5</code></th>
			<td><a href="ng_coverage/1715559047/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:03:01</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1715079781/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:00:51</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1715079651/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-07T11:00:30</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1715079630/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-07T10:56:40</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1715079400/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-06T01:39:14</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/zone.js-0.14.5</code></th>
			<td><a href="ng_coverage/1714959554/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-06T01:35:58</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.12.8</code></th>
			<td><a href="ng_coverage/1714959358/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-06T01:32:00</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.5</code></th>
			<td><a href="ng_coverage/1714959120/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-06T00:38:15</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-deploy-plugin-3.1.2</code></th>
			<td><a href="ng_coverage/1714955895/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-05-06T00:37:54</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.17.1</code></th>
			<td><a href="ng_coverage/1714955874/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-29T12:16:26</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1714392986/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-29T12:15:54</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1714392954/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-29T12:14:30</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1714392870/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-29T12:14:11</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1714392851/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:18:29</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-shade-plugin-3.5.3</code></th>
			<td><a href="ng_coverage/1714353509/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:08:16</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.4</code></th>
			<td><a href="ng_coverage/1714352896/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-04-29T01:07:51</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.7</code></th>
			<td><a href="ng_coverage/1714352871/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->