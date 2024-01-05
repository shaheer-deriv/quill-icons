import type { Meta, StoryObj } from '@storybook/react';

import { LightMajorMinorExoticPairsIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/LightMajorMinorExoticPairsIcon',
  component: LightMajorMinorExoticPairsIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LightMajorMinorExoticPairsIcon>;

export default meta;

type Story = StoryObj<typeof LightMajorMinorExoticPairsIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
