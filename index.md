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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.3.1</code></th>
			<td><a href="execution/latest/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-19T01:37:57</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.3.1</code></th>
			<td><a href="execution/1687138677/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1687138677/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1687138677/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1687138677/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1687138677/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1687138677/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1687138677/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-19T01:33:43</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.0.1</code></th>
			<td><a href="execution/1687138423/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1687138423/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1687138423/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1687138423/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1687138423/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1687138423/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1687138423/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-19T01:23:17</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-shade-plugin-3.5.0</code></th>
			<td><a href="execution/1687137797/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1687137797/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1687137797/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1687137797/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1687137797/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1687137797/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1687137797/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-14T15:00:51</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1686754851/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686754851/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686754851/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686754851/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686754851/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686754851/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686754851/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-14T14:50:20</code></th>
			 <th><code>changelog_auto</code></th>
			<td><a href="execution/1686754220/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686754220/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686754220/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686754220/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686754220/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686754220/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686754220/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-14T09:19:44</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1686734384/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686734384/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686734384/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686734384/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686734384/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686734384/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686734384/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-14T08:20:12</code></th>
			 <th><code>embed-icons</code></th>
			<td><a href="execution/1686730812/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686730812/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686730812/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686730812/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686730812/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686730812/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686730812/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-13T16:03:45</code></th>
			 <th><code>embed-icons</code></th>
			<td><a href="execution/1686672225/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686672225/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686672225/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686672225/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686672225/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686672225/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686672225/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T08:08:18</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1686557298/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686557298/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686557298/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686557298/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686557298/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686557298/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686557298/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:41:52</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.3.0</code></th>
			<td><a href="execution/1686555712/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686555712/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686555712/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686555712/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686555712/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686555712/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686555712/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:38:48</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1686555528/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686555528/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686555528/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686555528/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686555528/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686555528/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686555528/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:23:31</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1686554611/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686554611/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686554611/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686554611/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686554611/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686554611/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686554611/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:22:51</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1686554571/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686554571/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686554571/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686554571/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686554571/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686554571/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686554571/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:22:10</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1686554530/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686554530/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686554530/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686554530/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686554530/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686554530/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686554530/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:20:05</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1686554405/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686554405/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686554405/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686554405/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686554405/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686554405/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686554405/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:18:20</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1686554300/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686554300/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686554300/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686554300/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686554300/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686554300/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686554300/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:10:10</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.5</code></th>
			<td><a href="execution/1686553810/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686553810/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686553810/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686553810/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686553810/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686553810/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686553810/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:40:16</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/karma-jasmine-html-reporter-2.1.0</code></th>
			<td><a href="execution/1686534016/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686534016/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686534016/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686534016/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686534016/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686534016/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686534016/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:32:35</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.13.4</code></th>
			<td><a href="execution/1686533555/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686533555/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686533555/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686533555/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686533555/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686533555/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686533555/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:32:08</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-3.5.3</code></th>
			<td><a href="execution/1686533528/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686533528/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686533528/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686533528/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686533528/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686533528/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686533528/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.0.1</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-06-19T01:37:26</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.0.1</code></th>
			<td><a href="mutation/1687138646/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-06-19T01:28:21</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-shade-plugin-3.5.0</code></th>
			<td><a href="mutation/1687138101/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-06-14T15:07:29</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1686755249/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-06-14T14:52:21</code></th>
			 <th><code>changelog_auto</code></th>
			<td><a href="mutation/1686754341/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-06-14T09:22:51</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1686734571/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-06-14T08:24:20</code></th>
			 <th><code>embed-icons</code></th>
			<td><a href="mutation/1686731060/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-06-13T16:11:02</code></th>
			 <th><code>embed-icons</code></th>
			<td><a href="mutation/1686672662/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-06-12T08:14:23</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1686557663/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-06-12T07:45:58</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1686555958/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-06-12T07:32:45</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1686555165/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-06-12T07:30:23</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1686555023/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-06-12T07:27:41</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1686554861/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-06-12T07:27:15</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1686554835/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-06-12T07:25:37</code></th>
			 <th><code>dependabot/maven/org.seleniumhq.selenium-selenium-java-4.10.0</code></th>
			<td></td>
			<td><a href="mutation/1686554737/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1686554737/project_mutation_reports/aggregator/target/pit-reports/index.html">project_mutation_reports/aggregator/target/pit-reports</a></td>
			<td><a href="mutation/1686554737/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1686554737/project_mutation_reports/assert/assert-core/target/pit-reports/index.html">project_mutation_reports/assert/assert-core/target/pit-reports</a></td>
			<td><a href="mutation/1686554737/project_mutation_reports/assert/assert-filter/target/pit-reports/index.html">project_mutation_reports/assert/assert-filter/target/pit-reports</a></td>
			<td><a href="mutation/1686554737/project_mutation_reports/assert/assert-junit5/target/pit-reports/index.html">project_mutation_reports/assert/assert-junit5/target/pit-reports</a></td>
			<td><a href="mutation/1686554737/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1686554737/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1686554737/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1686554737/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1686554737/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1686554737/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1686554737/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1686554737/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1686554737/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1686554737/project_mutation_reports/report/report-core/target/pit-reports/index.html">project_mutation_reports/report/report-core/target/pit-reports</a></td>
			<td><a href="mutation/1686554737/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1686554737/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:24:26</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1686554666/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-06-12T01:46:40</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/karma-jasmine-html-reporter-2.1.0</code></th>
			<td><a href="mutation/1686534400/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-06-12T01:41:43</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.3.0</code></th>
			<td><a href="mutation/1686534103/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-06-12T01:39:13</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.13.4</code></th>
			<td><a href="mutation/1686533953/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-06-12T01:38:40</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-3.5.3</code></th>
			<td><a href="mutation/1686533920/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr> <th><code>2023-06-12T01:34:26</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.5</code></th>
			<td><a href="mutation/1686533666/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.3.1</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-19T01:37:57</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.3.1</code></th>
			<td><a href="ng_coverage/1687138677/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-19T01:33:43</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.0.1</code></th>
			<td><a href="ng_coverage/1687138423/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-19T01:23:17</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-shade-plugin-3.5.0</code></th>
			<td><a href="ng_coverage/1687137797/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-14T15:00:51</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1686754851/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-14T14:50:20</code></th>
			 <th><code>changelog_auto</code></th>
			<td><a href="ng_coverage/1686754220/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-14T09:19:44</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1686734384/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-14T08:20:12</code></th>
			 <th><code>embed-icons</code></th>
			<td><a href="ng_coverage/1686730812/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-13T16:03:45</code></th>
			 <th><code>embed-icons</code></th>
			<td><a href="ng_coverage/1686672225/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T08:08:18</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1686557298/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:41:52</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.3.0</code></th>
			<td><a href="ng_coverage/1686555712/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:38:48</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1686555528/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:23:31</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1686554611/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:22:51</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1686554571/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:22:10</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1686554530/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:20:05</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1686554405/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:18:20</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1686554300/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T07:10:10</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.5</code></th>
			<td><a href="ng_coverage/1686553810/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:40:16</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/karma-jasmine-html-reporter-2.1.0</code></th>
			<td><a href="ng_coverage/1686534016/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:32:35</code></th>
			 <th><code>dependabot/github_actions/github/codeql-action-2.13.4</code></th>
			<td><a href="ng_coverage/1686533555/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T01:32:08</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-3.5.3</code></th>
			<td><a href="ng_coverage/1686533528/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->