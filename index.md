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
			 <th><code>dependabot/maven/org.pitest-pitest-junit5-plugin-1.2.1</code></th>
			<td><a href="execution/latest/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-30T00:29:50</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-junit5-plugin-1.2.1</code></th>
			<td><a href="execution/1698625790/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698625790/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698625790/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698625790/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698625790/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698625790/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698625790/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-30T00:29:09</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.15.2</code></th>
			<td><a href="execution/1698625749/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698625749/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698625749/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698625749/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698625749/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698625749/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698625749/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-29T18:02:28</code></th>
			 <th><code>duct</code></th>
			<td><a href="execution/1698602548/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698602548/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698602548/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698602548/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698602548/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698602548/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698602548/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-29T17:50:26</code></th>
			 <th><code>duct</code></th>
			<td><a href="execution/1698601826/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698601826/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698601826/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698601826/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698601826/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698601826/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698601826/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-29T16:56:28</code></th>
			 <th><code>duct</code></th>
			<td><a href="execution/1698598588/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698598588/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698598588/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698598588/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698598588/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698598588/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698598588/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-29T12:05:17</code></th>
			 <th><code>duct</code></th>
			<td><a href="execution/1698581117/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698581117/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698581117/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698581117/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698581117/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698581117/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698581117/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-29T00:18:00</code></th>
			 <th><code>duct</code></th>
			<td><a href="execution/1698538680/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698538680/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698538680/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698538680/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698538680/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698538680/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698538680/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-28T22:46:35</code></th>
			 <th><code>duct</code></th>
			<td><a href="execution/1698533195/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698533195/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698533195/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698533195/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698533195/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698533195/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698533195/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-28T19:44:14</code></th>
			 <th><code>duct</code></th>
			<td><a href="execution/1698522254/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698522254/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698522254/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698522254/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698522254/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698522254/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698522254/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-28T19:17:12</code></th>
			 <th><code>duct</code></th>
			<td><a href="execution/1698520632/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698520632/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698520632/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698520632/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698520632/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698520632/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698520632/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-27T21:42:18</code></th>
			 <th><code>duct</code></th>
			<td><a href="execution/1698442938/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698442938/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698442938/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698442938/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698442938/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698442938/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698442938/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-24T10:25:45</code></th>
			 <th><code>duct</code></th>
			<td><a href="execution/1698143145/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698143145/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698143145/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698143145/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698143145/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698143145/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698143145/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-23T07:59:42</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1698047982/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698047982/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698047982/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698047982/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698047982/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698047982/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698047982/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-23T07:51:55</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1698047515/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698047515/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698047515/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698047515/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698047515/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698047515/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698047515/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-23T07:37:28</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-5.1.1</code></th>
			<td><a href="execution/1698046648/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698046648/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698046648/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698046648/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698046648/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698046648/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698046648/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-23T07:32:29</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1698046349/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698046349/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698046349/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698046349/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698046349/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698046349/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698046349/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-23T07:27:26</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1698046046/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698046046/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698046046/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698046046/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698046046/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698046046/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698046046/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-23T07:26:23</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1698045983/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698045983/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698045983/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698045983/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698045983/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698045983/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698045983/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-23T01:02:51</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.7</code></th>
			<td><a href="execution/1698022971/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698022971/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698022971/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698022971/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698022971/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698022971/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698022971/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-10-23T00:55:44</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/d3-7.4.2</code></th>
			<td><a href="execution/1698022544/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1698022544/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1698022544/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1698022544/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1698022544/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1698022544/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1698022544/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>duct</code></th>
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
		<tr> <th><code>2023-10-29T17:57:56</code></th>
			 <th><code>duct</code></th>
			<td><a href="mutation/1698602276/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-29T17:05:05</code></th>
			 <th><code>duct</code></th>
			<td><a href="mutation/1698599105/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-29T12:15:05</code></th>
			 <th><code>duct</code></th>
			<td><a href="mutation/1698581705/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-24T10:35:30</code></th>
			 <th><code>duct</code></th>
			<td><a href="mutation/1698143730/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-23T08:10:07</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1698048607/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-23T07:58:41</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1698047921/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-23T07:42:56</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-5.1.1</code></th>
			<td><a href="mutation/1698046976/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-23T07:42:21</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-5.1.1</code></th>
			<td></td>
			<td><a href="mutation/1698046941/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1698046941/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1698046941/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1698046941/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1698046941/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1698046941/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1698046941/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1698046941/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1698046941/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1698046941/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1698046941/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td><a href="mutation/1698046941/project_mutation_reports/report/report-core/target/pit-reports/index.html">project_mutation_reports/report/report-core/target/pit-reports</a></td>
			<td><a href="mutation/1698046941/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1698046941/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2023-10-23T07:41:23</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1698046883/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-23T07:40:29</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1698046829/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-23T07:39:44</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1698046784/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-23T07:35:43</code></th>
			 <th><code>dependabot/maven/org.jacoco-jacoco-maven-plugin-0.8.11</code></th>
			<td></td>
			<td><a href="mutation/1698046543/mutation_report/index.html">mutation_report</a></td>
			<td><a href="mutation/1698046543/project_mutation_reports/api/target/pit-reports/index.html">project_mutation_reports/api/target/pit-reports</a></td>
			<td><a href="mutation/1698046543/project_mutation_reports/builder/target/pit-reports/index.html">project_mutation_reports/builder/target/pit-reports</a></td>
			<td><a href="mutation/1698046543/project_mutation_reports/message/message-core/target/pit-reports/index.html">project_mutation_reports/message/message-core/target/pit-reports</a></td>
			<td><a href="mutation/1698046543/project_mutation_reports/message/message-http/target/pit-reports/index.html">project_mutation_reports/message/message-http/target/pit-reports</a></td>
			<td><a href="mutation/1698046543/project_mutation_reports/message/message-json/target/pit-reports/index.html">project_mutation_reports/message/message-json/target/pit-reports</a></td>
			<td><a href="mutation/1698046543/project_mutation_reports/message/message-sql/target/pit-reports/index.html">project_mutation_reports/message/message-sql/target/pit-reports</a></td>
			<td><a href="mutation/1698046543/project_mutation_reports/message/message-text/target/pit-reports/index.html">project_mutation_reports/message/message-text/target/pit-reports</a></td>
			<td><a href="mutation/1698046543/project_mutation_reports/message/message-web/target/pit-reports/index.html">project_mutation_reports/message/message-web/target/pit-reports</a></td>
			<td><a href="mutation/1698046543/project_mutation_reports/message/message-xml/target/pit-reports/index.html">project_mutation_reports/message/message-xml/target/pit-reports</a></td>
			<td><a href="mutation/1698046543/project_mutation_reports/model/target/pit-reports/index.html">project_mutation_reports/model/target/pit-reports</a></td>
			<td></td>
			<td><a href="mutation/1698046543/project_mutation_reports/validation/validation-core/target/pit-reports/index.html">project_mutation_reports/validation/validation-core/target/pit-reports</a></td>
			<td><a href="mutation/1698046543/project_mutation_reports/validation/validation-junit5/target/pit-reports/index.html">project_mutation_reports/validation/validation-junit5/target/pit-reports</a></td>
		</tr>
		<tr> <th><code>2023-10-23T01:06:11</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/d3-7.4.2</code></th>
			<td><a href="mutation/1698023171/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-23T01:05:40</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.7</code></th>
			<td><a href="mutation/1698023140/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-23T00:24:26</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.1</code></th>
			<td><a href="mutation/1698020666/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-19T11:10:22</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1697713822/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-19T10:37:29</code></th>
			 <th><code>system_diagram_styling</code></th>
			<td><a href="mutation/1697711849/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-19T10:13:11</code></th>
			 <th><code>system_diagram_styling</code></th>
			<td><a href="mutation/1697710391/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-16T08:57:34</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1697446654/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
		<tr> <th><code>2023-10-16T08:53:35</code></th>
			 <th><code>link_fix</code></th>
			<td><a href="mutation/1697446415/mutation_report/index.html">mutation</a></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
			 <th><code>dependabot/maven/org.pitest-pitest-junit5-plugin-1.2.1</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-30T00:29:50</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-junit5-plugin-1.2.1</code></th>
			<td><a href="ng_coverage/1698625790/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-30T00:29:09</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.15.2</code></th>
			<td><a href="ng_coverage/1698625749/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-29T18:02:28</code></th>
			 <th><code>duct</code></th>
			<td><a href="ng_coverage/1698602548/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-29T17:50:26</code></th>
			 <th><code>duct</code></th>
			<td><a href="ng_coverage/1698601826/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-29T16:56:28</code></th>
			 <th><code>duct</code></th>
			<td><a href="ng_coverage/1698598588/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-29T12:05:17</code></th>
			 <th><code>duct</code></th>
			<td><a href="ng_coverage/1698581117/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-29T00:18:00</code></th>
			 <th><code>duct</code></th>
			<td><a href="ng_coverage/1698538680/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-28T22:46:35</code></th>
			 <th><code>duct</code></th>
			<td><a href="ng_coverage/1698533195/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-28T19:44:14</code></th>
			 <th><code>duct</code></th>
			<td><a href="ng_coverage/1698522254/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-28T19:17:12</code></th>
			 <th><code>duct</code></th>
			<td><a href="ng_coverage/1698520632/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-27T21:42:18</code></th>
			 <th><code>duct</code></th>
			<td><a href="ng_coverage/1698442938/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-24T10:25:45</code></th>
			 <th><code>duct</code></th>
			<td><a href="ng_coverage/1698143145/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-23T07:59:42</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1698047982/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-23T07:51:55</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1698047515/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-23T07:37:28</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-5.1.1</code></th>
			<td><a href="ng_coverage/1698046648/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-23T07:32:29</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1698046349/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-23T07:27:26</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1698046046/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-23T07:26:23</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1698045983/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-23T01:02:51</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.8.7</code></th>
			<td><a href="ng_coverage/1698022971/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-10-23T00:55:44</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/d3-7.4.2</code></th>
			<td><a href="ng_coverage/1698022544/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->