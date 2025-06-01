import { useThree } from '@react-three/fiber';

function CheckSize() {
    const { size } = useThree();

    console.log('Canvas width:', size.width);
    console.log('Canvas height:', size.height);

    return null;
}
