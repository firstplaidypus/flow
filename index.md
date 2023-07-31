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
			 <th><code>main</code></th>
			<td><a href="execution/latest/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-31T07:56:22</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1690790182/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690790182/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690790182/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690790182/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690790182/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690790182/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690790182/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-31T07:55:44</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1690790144/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690790144/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690790144/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690790144/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690790144/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690790144/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690790144/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-31T07:53:51</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1690790031/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690790031/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690790031/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690790031/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690790031/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690790031/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690790031/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-31T07:50:14</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1690789814/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690789814/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690789814/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690789814/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690789814/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690789814/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690789814/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-31T01:25:16</code></th>
			 <th><code>dependabot/github_actions/actions/setup-java-3.12.0</code></th>
			<td><a href="execution/1690766716/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690766716/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690766716/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690766716/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690766716/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690766716/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690766716/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-31T01:23:49</code></th>
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.5.0</code></th>
			<td><a href="execution/1690766629/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690766629/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690766629/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690766629/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690766629/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690766629/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690766629/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-31T01:01:01</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.4.5</code></th>
			<td><a href="execution/1690765261/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690765261/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690765261/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690765261/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690765261/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690765261/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690765261/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-31T00:56:38</code></th>
			 <th><code>dependabot/maven/com.github.ekryd.sortpom-sortpom-maven-plugin-3.3.0</code></th>
			<td><a href="execution/1690764998/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690764998/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690764998/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690764998/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690764998/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690764998/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690764998/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-31T00:51:50</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/tslib-2.6.1</code></th>
			<td><a href="execution/1690764710/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690764710/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690764710/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690764710/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690764710/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690764710/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690764710/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-25T10:49:21</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1690282161/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690282161/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690282161/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690282161/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690282161/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690282161/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690282161/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-25T10:34:16</code></th>
			 <th><code>rm_loc</code></th>
			<td><a href="execution/1690281256/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690281256/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690281256/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690281256/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690281256/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690281256/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690281256/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-24T09:12:45</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1690189965/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690189965/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690189965/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690189965/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690189965/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690189965/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690189965/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-24T08:33:36</code></th>
			 <th><code>junit-bom</code></th>
			<td><a href="execution/1690187616/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690187616/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690187616/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690187616/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690187616/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690187616/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690187616/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-24T08:08:29</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1690186109/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690186109/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690186109/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690186109/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690186109/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690186109/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690186109/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-24T08:04:54</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1690185894/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690185894/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690185894/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690185894/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690185894/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690185894/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690185894/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-24T01:16:10</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.1.0</code></th>
			<td><a href="execution/1690161370/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690161370/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690161370/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690161370/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690161370/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690161370/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690161370/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-24T01:14:36</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.4.4</code></th>
			<td><a href="execution/1690161276/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1690161276/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1690161276/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1690161276/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1690161276/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1690161276/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1690161276/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-17T07:59:55</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1689580795/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689580795/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689580795/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689580795/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689580795/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689580795/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689580795/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-17T07:58:06</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1689580686/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689580686/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689580686/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689580686/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689580686/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689580686/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689580686/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-07-17T01:22:36</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.4.2</code></th>
			<td><a href="execution/1689556956/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1689556956/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1689556956/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1689556956/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1689556956/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1689556956/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1689556956/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.5.0</code></th>
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
		</tr>
		<tr> <th><code>2023-07-31T01:33:18</code></th>
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.5.0</code></th>
			<td><a href="mutation/1690767198/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2023-07-31T01:32:39</code></th>
			 <th><code>dependabot/github_actions/actions/setup-java-3.12.0</code></th>
			<td><a href="mutation/1690767159/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2023-07-31T01:12:45</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.4.5</code></th>
			<td><a href="mutation/1690765965/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2023-07-31T01:03:17</code></th>
			 <th><code>dependabot/maven/com.github.ekryd.sortpom-sortpom-maven-plugin-3.3.0</code></th>
			<td><a href="mutation/1690765397/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2023-07-31T00:59:13</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/tslib-2.6.1</code></th>
			<td><a href="mutation/1690765153/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2023-07-25T10:57:37</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1690282657/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2023-07-25T10:39:27</code></th>
			 <th><code>rm_loc</code></th>
			<td><a href="mutation/1690281567/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2023-07-24T09:19:41</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1690190381/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2023-07-24T09:00:24</code></th>
			 <th><code>junit-bom</code></th>
			<td></td>
			<td><a href="mutation/1690189224/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1690189224/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1690189224/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1690189224/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1690189224/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1690189224/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1690189224/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1690189224/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1690189224/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1690189224/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1690189224/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1690189224/project_mutation_reports/report/report-core/target/pit-reports/index.html">project_mutation_reports/report/report-core/target/pit-reports</a></td>
			<td><a href="mutation/1690189224/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1690189224/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2023-07-24T08:18:42</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1690186722/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2023-07-24T08:12:39</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1690186359/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2023-07-24T01:24:34</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.4.4</code></th>
			<td><a href="mutation/1690161874/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2023-07-24T01:22:35</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.1.0</code></th>
			<td><a href="mutation/1690161755/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2023-07-17T08:06:46</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1689581206/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2023-07-17T08:06:05</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1689581165/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2023-07-17T01:29:21</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.4.2</code></th>
			<td><a href="mutation/1689557361/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2023-07-17T01:28:48</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.22.9</code></th>
			<td><a href="mutation/1689557328/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2023-07-14T11:33:38</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1689334418/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2023-07-14T11:06:50</code></th>
			 <th><code>tab_display</code></th>
			<td><a href="mutation/1689332810/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2023-07-14T09:11:55</code></th>
			 <th><code>tab_display</code></th>
			<td><a href="mutation/1689325915/mutation_report/index.html">mutation</a></td>
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
			 <th><code>main</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-31T07:56:22</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1690790182/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-31T07:55:44</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1690790144/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-31T07:53:51</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1690790031/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-31T07:50:14</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1690789814/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-31T01:25:16</code></th>
			 <th><code>dependabot/github_actions/actions/setup-java-3.12.0</code></th>
			<td><a href="ng_coverage/1690766716/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-31T01:23:49</code></th>
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.5.0</code></th>
			<td><a href="ng_coverage/1690766629/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-31T01:01:01</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.4.5</code></th>
			<td><a href="ng_coverage/1690765261/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-31T00:56:38</code></th>
			 <th><code>dependabot/maven/com.github.ekryd.sortpom-sortpom-maven-plugin-3.3.0</code></th>
			<td><a href="ng_coverage/1690764998/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-31T00:51:50</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/tslib-2.6.1</code></th>
			<td><a href="ng_coverage/1690764710/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-25T10:49:21</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1690282161/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-25T10:34:16</code></th>
			 <th><code>rm_loc</code></th>
			<td><a href="ng_coverage/1690281256/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-24T09:12:45</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1690189965/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-24T08:33:36</code></th>
			 <th><code>junit-bom</code></th>
			<td><a href="ng_coverage/1690187616/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-24T08:08:29</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1690186109/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-24T08:04:54</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1690185894/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-24T01:16:10</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.1.0</code></th>
			<td><a href="ng_coverage/1690161370/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-24T01:14:36</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.4.4</code></th>
			<td><a href="ng_coverage/1690161276/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-17T07:59:55</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1689580795/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-17T07:58:06</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1689580686/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-07-17T01:22:36</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.4.2</code></th>
			<td><a href="ng_coverage/1689556956/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->